var Suggestion = require("../models/suggestion")
var Strains = require("../models/strain")
var mongoose = require('mongoose')
var User = require('../models/user')

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
			Suggestion.find({}, function(err, docs){
				if (err){
					console.log(err)
				}
				else {
					res.send(docs)
				}
			})
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
	},

	favorited: function(req, res){
		var strainId = req.body._id
		User.update({_id: req.user._id}, {$push: {favorites: strainId}}, function(err, updated){
			User.findOne({_id: req.user.id}, function(err, doc){
				req.user = doc
				res.send(doc)
			})
		})
	},

	unfavorited: function(req, res){
		var strainId = req.body._id
		User.update({_id: req.user._id}, {$pull: {favorites: strainId}}, function(err, updated){
			User.findOne({_id: req.user.id}, function(err, doc){
				req.user = doc
				res.send(doc)
			})
		})
	}
}
module.exports = indexController;