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
	app.use(bodyParser.urlencoded({
	    'extended': 'true'
	}));

	app.use(bodyParser.json()); // parse application/json

	app.use(bodyParser.json({
	    type: 'application/vnd.api+json'
	})); // parse application/vnd.api+json as json

	app.use(methodOverride());

	var Todo = mongoose.model("Todo", {
	    text: String
	});

	app.get("/api/todos", function(req, res) {
	    Todo.find(function(err, todo) {
	        if (err) {
	            res.send(err);
	        } else {
	            res.json(todos);
	        };
	    });
	});


	 //This post creates the todo requested and then it shows the updated version of todos to the user.
	app.post('/api/todos', function(req, res) {
	    Todo.create({
	        text: req.body.text,
	        done: false
	    }, function(err, todo) {
	        if (err) {
	            res.send(err);
	        } else {
	            Todo.find(function(err, values) {
	                if (err) {
	                    res.send(err);
	                } else {
	                    res.json(values)
	                };
	            });

	        };
	    });
	});

	 //delete a todo

	app.delete('/api/todos/:todo_id', function(req, res) {
	    Todo.remove({
	        _id: req.params.todo_id
	    }, function(err, todo) {
	        if (err) {
	            res.send(err);
	        } else {
	            Todo.find(function(err, values) {
	                if (err) {
	                    res.send(err)
	                };
	                res.json(values);
	            };
	        };
	    });
	});

	app.listen(8080);
	console.log("App listening on port 8080");
