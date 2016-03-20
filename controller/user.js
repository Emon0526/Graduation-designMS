var models = require('../models');
var User = models.user;
var user = function() {}

user.prototype.renderUserPage = function(req, res) {
    res.render('user');
}
module.exports = user;
