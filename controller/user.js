var models = require('../models');
var User = models.user;
var user = function(req, res) {
	var userData = {};
	User.findAll().done({
		function(data) {
		  	console.log(data)
            // res.render('user',{
            // 	user : user
            // })
		}
	})
}
module.exports = user;
