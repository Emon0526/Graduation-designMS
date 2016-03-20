var express = require('express');
var router = express.Router();
var models = require('../models');
var User = models.users;
var goodsQuery = require('../controller/users');
var goodsQuery = new goodsQuery();
router.get('/', user);


module.exports = router;
