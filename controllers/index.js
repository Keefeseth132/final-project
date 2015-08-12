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
	}
};


module.exports = indexController;