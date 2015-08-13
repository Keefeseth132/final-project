var mongoose = require('mongoose');

var suggestionSchema = mongoose.Schema({
	text : String
})

var suggestions = mongoose.model('suggestions', suggestionSchema);

module.exports = suggestions;