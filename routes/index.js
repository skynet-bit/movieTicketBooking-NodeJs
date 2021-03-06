var express = require('express');
var router = express.Router();
var Movies = require('../models/movies');
var User = require('../models/user');

router.get('/', function (req, res, next) {
    User.findOne({unique_id:req.session.userId},function(err,data){
		if(!data){
			return res.render('index', {"name":null, "title": "Book My Show"});
		}else{
			//console.log("found");
			return res.render('index', {"name":data.username, "title": "Book My Show"});
		}
	});
});

module.exports = router;