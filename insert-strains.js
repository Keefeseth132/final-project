var mongoose = require('mongoose')
var Strains = require('./models/strain')
var strainList = require('./strains.json')

mongoose.connect('mongodb://localhost/budtanica')

for (var i = 0; i < strainList.length; i++){
	var newStrain = new Strains(strainList[i])
	newStrain.save(function(err){
		console.log(err)
	})
}