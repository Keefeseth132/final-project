var Suggestion = require("../models/suggestion")
var Strains = require("../models/strain")
var mongoose = require('mongoose')

var indexController = {
	index: function(req, res) {
		res.render('index')
	},

	getStrains: function(req, res){
		Strains.find({}, function(err, strains){
			if (err){
				console.log(err)
			}
			else {
				res.send(strains)
			}
		})
	},

	about: function(req, res){
		res.render('midterm-about', { pathname: req.path, user: req.user});
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
				console.log(err)
			}
			else {
				res.send(docs)
			}
		})
	}
}
module.exports = indexController;