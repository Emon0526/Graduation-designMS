var express = require('express');
var router = express.Router();
var models = require('../models');
var Goods = models.goods;
var goodsQuery = require('../controller/goods');
var goodsQuery = new goodsQuery();
router.get('/', function(req, res) {
    res.render('goodlist');
});
module.exports = router;

