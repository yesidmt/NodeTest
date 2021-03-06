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


// API routes
var router = express.Router();
app.use(router);

var Ctrl = require('./controller/testController');
var testController = express.Router();

testController.route('/testController')  
    .get(Ctrl.testJson);

app.use('/api', testController);

testController.route('/socket')  
  .get(Ctrl.socket);
app.use('/api', testController);
 
//
 
 //Servidor websocket
 
var messages = [{  
  id: 1,
  text: "mensaje",
  author: "test"
}];

//app.use(express.static('public'));
//app.get('/hello', function(req, res) {  
  //res.status(200).send("");
//});
//

 var clients =[];

io.on('connection', function(socket) {  
  console.log('Alguien se ha conectado con Sockets');
 console.log('connection :', socket.request.connection._peername);
 socket.on('storeClientInfo', function (data) {

            var clientInfo = new Object();
            clientInfo.customId     = data.customId;
            clientInfo.clientId     = socket.id;
            clients.push(clientInfo);
			
			 console.log(clients); 
        });
  
 console.log("array ids"+clients); 
 
  socket.emit('messages', messages);

  socket.on('new-message', function(data) {
    messages.push(data);

    io.sockets.emit('messages', messages);
  });
});
//


server.listen(8001, function() {  
  console.log("Servidor corriendo en http://localhost:8001");
});


//http://stackoverflow.com/questions/35680565/sending-message-to-specific-client-in-socket-io