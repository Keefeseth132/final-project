var Suggestion = require("../models/suggestion")
var indexController = {
	index: function(req, res) {
		res.render('index');
	},

	about: function(req, res){
		res.render('midterm-about', { pathname: req.path});
	},

	newCannabis: function(req, res){
		res.render('midterm-new');
	},

	suggestions: function(req, res){
		res.render('midterm-suggestions')
	},

	newSuggestion: function(req, res){
		var suggestionText = new Suggestion(req.body);
		suggestionText.save(function(err, doc){
			res.send(doc);
		})
	},

	getSuggestions: function(req, res){
		Suggestion.find({}, function(err, docs){
			if (err){
				console.log(error)
			}
			else {
				res.send(docs)
			}
		})
	}
}
module.exports = indexController;