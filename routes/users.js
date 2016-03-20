var express = require('express');
var router = express.Router();
var user = require('../controller/user');
var user = new user();

router.get('/', user.renderUserPage);

module.exports = router;
