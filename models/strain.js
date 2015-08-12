var mongoose = require('mongoose');

var strainSchema = mongoose.Schema({
	name : String,
	type : String,
	THC : String,
	CBD : String,
	CBN : String,
	effects : String,
	ailments : [String],
	image : String
})

var Strains = mongoose.model('strains', strainSchema);

module.exports = Strains;