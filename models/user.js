const mongoose = require('mongoose')
//for password
const crypto = require('crypto')
//to generate unique strings
//const { v1: uuidv1 } = require('uuid')
let uuidv1 = require('uuidv1')
console.log(uuidv1())

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    maxlength: 32
  },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: 32
  },
  //will save the hashed version of password
  hashed_password: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    trim: true,
  },
  salt: String,
  //0 is standard user, 1 is admin
  role: {
    type: Number,
    default: 0
  },
  history: {
    type: Array,
    default: []
  }
}, {timestamps: true}
);

//virtual field
userSchema.virtual('password')
.set(function(password) {
  this._password = password
  this.salt = uuidv1() //give us random string
  this.hashed_password = this.encryptPassword(password)
})
.get(function() {
  return this._password
})

userSchema.methods = {
  authenticate: function(plainText) { //plain text is password
    return this.encryptPassword(plainText) === this.hashed_password;
  },
  //look at node.js documentation
  encryptPassword: function(password){
    if(!password) return '';
    try {
      return crypto.createHmac('sha1', this.salt)
                      .update(password)
                      .digest('hex')
    } catch(err) {
      return "";
    }
  }
}

module.exports = mongoose.model("User", userSchema);
