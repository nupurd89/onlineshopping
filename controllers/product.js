const formidable = require('formidable');
const _ = require('lodash');
const fs = require("fs") //access to file system
const Product= require('../models/product');
const {errorHandler} = require('../helpers/dbErrorHandler')

exports.productById = (req, res, next, id) => {
  Product.findById(id).exec((err, product) => {
    if(err || !product) {
      return res.status(400).json({
        error: "Product not found"
      });
    }
    req.product = product;
    next();
  });
};

exports.read = (req,res) => {
  //dont send photo because of big size (will make a seperate request)
  req.product.photo = undefined;
  return res.json(req.product);
}

exports.create = (req, res) => {
  //need to send form data to upload image so cant make Product from req.body
  let form = new formidable.IncomingForm()
  form.keepExtensions = true
  form.parse(req, (err, fields, files) => {
    if(err) {
      return res.status(400).json({
        error: "Image could not be uploaded"
      });
    }


    // check for all fields
    const {name, description, price, category, quantity, shipping} = fields
    if(!name || !description || !price || !category || !quantity || !shipping){
      return res.status(400).json({
        error: "All fields are required."
      });
    }

    let product = new Product(fields)

    if(files.photo) { //if the name is image, it would be files.image
      //console.log("FILES PHOTO:", files.photo )
      if(files.photo.size > 1000000){
        return res.status(400).json({
          error: "Image should be less than 1mb in size"
        });
      }
      product.photo.data = fs.readFileSync(files.photo.path)
      product.photo.contentType = files.photo.type
    }
    product.save((err, result) => {
      if(err) {
        return res.status(400).json({
          error: errorHandler
        })
      };
      res.json(result);
    })

  })
};

exports.remove = (req,res) => {
  let product = req.product;
  product.remove((err, deletedProduct) => {
    if(err) {
      return res.status(400).json({
        error: errorHandler(err)
      });
    }
    res.json({
      message: "Product delted succesfully"
    })
  })
};

exports.update = (req, res) => {
  //need to send form data to upload image so cant make Product from req.body
  let form = new formidable.IncomingForm()
  form.keepExtensions = true
  form.parse(req, (err, fields, files) => {
    if(err) {
      return res.status(400).json({
        error: "Image could not be uploaded"
      });
    }


    // check for all fields
    const {name, description, price, category, quantity, shipping} = fields
    if(!name || !description || !price || !category || !quantity || !shipping){
      return res.status(400).json({
        error: "All fields are required."
      });
    }

    //extend method comes with lodash library
    let product = req.product
    product = _.extend(product, fields);

    if(files.photo) { //if the name is image, it would be files.image
      //console.log("FILES PHOTO:", files.photo )
      if(files.photo.size > 1000000){
        return res.status(400).json({
          error: "Image should be less than 1mb in size"
        });
      }
      product.photo.data = fs.readFileSync(files.photo.path)
      product.photo.contentType = files.photo.type
    }
    product.save((err, result) => {
      if(err) {
        return res.status(400).json({
          error: errorHandler
        })
      };
      res.json(result);
    })

  })
};

exports.list = (req, res) => {
  // setting queries
  let order = req.query.order ? req.query.order: 'asc'//either grab order or set default to ascending
  let sortBy = req.query.sortBy ? req.query.sortBy: '_id'
  let limit = req.query.limit ? parseInt(req.query.limit): 6

  //grabbing products based on queries

  /**
  * Show products based on:
  * Sell/ Arrival (New arrivals)
  by sell = /products?sortBy=sold&order=desc&limit=4
  * This means you sort by the sold category in descending category and returns 4 products on each request
  * by arrival = /products?sortBy=createdAt&order=desc&limit=4
  * if no params are sent, then all products are returned (if just /products)
  */


  Product.find()
    .select("-photo") //dont send photo right away because it is slow - will do it in a different request
    .populate('category') //can do this because it has "category" in schema and type is ObjectId
    .sort([[sortBy, order]]) //want to sort by sortBy and errorHandler
    .limit(limit)
    .exec((err, products) => {
      if(err) {
        res.status(400).json({
          error: 'Products not found'
        });
      }
      res.json(products);
    })
}

/**
* it will find the products based on req product category
* other products have the same category will be returned
*/

exports.listRelated = (req, res) => {

  let limit = req.query.limit ? parseInt(req.query.limit): 6
  //$ne means not including (doesnt including current product)
  //also find based on category
  Product.find({_id: {$ne: req.product}, category: req.product.category})
    .limit(limit)
    .populate('category', '_id name') //only show category and id name
    .exec((err, products) => {
      if(err) {
        res.status(400).json({
          error: 'Products not found'
        });
      }
      res.json(products);
    })
}

exports.listCategories = (req, res) => {
  Product.distinct("category", {}, (err, categories) => {
    if(err) {
      res.status(400).json({
        error: 'Categories not found'
      });
    }
    res.json(categories);
  })
}

/**
 * list products by search
 * we will implement product search in react frontend
 * we will show categories in checkbox and price range in radio buttons
 * as the user clicks on those checkbox and radio buttons
 * we will make api request and show the products to users based on what he wants
 */

// route - make sure its post


exports.listBySearch = (req, res) => {
    let order = req.body.order ? req.body.order : "desc";
    let sortBy = req.body.sortBy ? req.body.sortBy : "_id";
    let limit = req.body.limit ? parseInt(req.body.limit) : 100;
    let skip = parseInt(req.body.skip);
    let findArgs = {};

    // console.log(order, sortBy, limit, skip, req.body.filters);
    // console.log("findArgs", findArgs);

    for (let key in req.body.filters) {
        if (req.body.filters[key].length > 0) {
            if (key === "price") {
                // gte -  greater than price [0-10]
                // lte - less than
                findArgs[key] = {
                    $gte: req.body.filters[key][0],
                    $lte: req.body.filters[key][1]
                };
            } else {
                findArgs[key] = req.body.filters[key];
            }
        }
    }

    Product.find(findArgs)
        .select("-photo")
        .populate("category")
        .sort([[sortBy, order]])
        .skip(skip)
        .limit(limit)
        .exec((err, data) => {
            if (err) {
                return res.status(400).json({
                    error: "Products not found"
                });
            }
            res.json({
                size: data.length,
                data
            });
        });
};

exports.photo = (req, res, next) => {
    if (req.product.photo.data) {
        res.set('Content-Type', req.product.photo.contentType);
        return res.send(req.product.photo.data);
    }
    next();
};
