var express = require('express');  
var app = express();  
var bodyParser = require('body-parser');
var methodOverride = require("method-override");
var server = require('http').Server(app);  
var io = require('socket.io')(server);


var express = require("express"),  
    app = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override");
    mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: false }));  
app.use(bodyParser.json());  
app.use(methodOverride());

var router = express.Router();

router.get('/', function(req, res) {  
   res.send("Hello World!");
});

app.use(router);


var Ctrl = require('./controller/testController');

// API routes
var testController = express.Router();

testController.route('/testController')  
  
  .get(Ctrl.testJson);

app.use('/api', testController);




testController.route('/socket')  
  
  .get(Ctrl.socket);

app.use('/api', testController);
 
 
 
 
 

 
 
 // Start server
app.listen(8000, function() {
 console.log("Node server running on http://localhost:8000");
});
 
 
 
