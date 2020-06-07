const express = require('express')
const router = express.Router()

const {requireSignin, isAuth, isAdmin} = require('../controllers/auth');
const {userById} = require('../controllers/user');
//test
router.get('/secret/:userId', requireSignin, isAuth, isAdmin, (req,res) => {
  res.json({
    user: req.profile
  });
});
//take the parameter
router.param('userId', userById);

module.exports = router;
