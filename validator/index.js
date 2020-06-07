exports.userSignupValidator = (req,res, next) => {
  req.check('name', 'Name is required').notEmpty()
  req.check('email', 'Email must be between 3 to 32 characters')
      .matches(/.+\@.+\..+/) //makes sure that there is an @ symbol (can use better email validator later)
      .withMessage('Email must contain @')
      .isLength({
        min: 4,
        max: 32
      })
  req.check('password', 'Password is required').notEmpty()
  req.check('password')
    .isLength({min:6})
    .withMessage('Password must contain at least 6 characters')
    .matches(/\d/) //has at least one Number
    .withMessage("Password must contain a number");
      const errors = req.validationErrors()
      if(errors){
        const firstError = errors.map(error => error.msg)[0] //grab first error
        return res.status(400).json({error: firstError})
      }
      next(); //always need next when creating middleware
};
