	var express = require('express');
	var app = express(); // create our app w/ express
	var bodyParser = require("body-parser");
	var mongoose = require("mongoose");
	var morgan = require("morgan");
	var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)


	app.use(express.logger());
	app.set('port', (process.env.PORT || 5000))
	app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users
	app.use(morgan('dev')); 
	app.use(bodyParser.urlencoded({'extended': 'true'}));
	app.use(bodyParser.json()); 									// parse application/json
	app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
	app.use(methodOverride());

	app.get("/", function(request, response) {});

	app.listen(8080);
	console.log("App listening on port 8080");
