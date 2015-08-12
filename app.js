var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/budtanica')

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);
app.get('/about', indexController.about);
app.get('/new-cannabis', indexController.newCannabis);
app.get('/suggestions', indexController.suggestions);

var server = app.listen(6158, function() {
	console.log('Express server listening on port ' + server.address().port);
});
