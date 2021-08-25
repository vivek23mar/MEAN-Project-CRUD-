const express = require('express');

var router = express.Router();



var ctrUser = require('../controllers/user.controller');

router.post('/register',ctrUser.userRegister);
router.post('/login',ctrUser.auth)


module.exports=router;