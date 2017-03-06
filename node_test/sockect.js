var express = require('express');  
var app = express();  
var bodyParser = require('body-parser');
var methodOverride = require("method-override");
var server = require('http').Server(app);  
var io = require('socket.io')(server);

// Middlewares
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json()); 
app.use(methodOverride());

var router = express.Router();


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
 

 
var messages = [{  
  id: 1,
  text: "mensaje",
  author: "test"
}];

app.use(express.static('public'));

app.get('/hello', function(req, res) {  
  res.status(200).send("");
});

io.on('connection', function(socket) {  
  //console.log('Alguien se ha conectado con Sockets');
  socket.emit('messages', messages);

  socket.on('new-message', function(data) {
    messages.push(data);

    io.sockets.emit('messages', messages);
  });
});



server.listen(8001, function() {  
  console.log("Servidor corriendo en http://localhost:8001");
});


