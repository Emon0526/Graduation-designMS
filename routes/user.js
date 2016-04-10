var express = require('express');
var router = express.Router();
var models = require('../models');
var User = models.user;
var user = require('../controller/user');
var user = new user();

router.get('/', function(req,res){
	res.render('user', {
        user: user
    });
});

module.exports = router;
