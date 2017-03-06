var express = require('express');  
var app = express();  
var server = require('http').Server(app);  
var io = require('socket.io')(server);

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

server.listen(8000, function() {  
  console.log("Servidor corriendo en http://localhost:8000");
});





var mysql      = require('mysql');
var connection = mysql.createConnection({
  host: "31.220.104.1",
  user: "u611574828_root",
  password: "desarrollo2016",
  database: "u611574828_vet"
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});

connection.query('SELECT * FROM w001_usuarios', function (error, results, fields) {
  if (error) throw error;
  console.log('str_nombres: ', results[0].str_nombres);
  
  var messages = [{  
  id: 2,
  text: results[0].str_nombres,
  author: "str_nombres"
}];

 io.sockets.emit('messages', messages);


});

connection.end();