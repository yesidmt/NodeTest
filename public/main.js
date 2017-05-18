var socket = io.connect('http://192.168.137.1:8001/', { 'forceNew': true });
socket.on('connect', function (data) {
       
    var mens = JSON.stringify({

            id: "test@gmail.com"
           
           
        });
    
    socket.emit('storeClientInfo',mens);
    });
socket.on('messages', function(data) {  
  console.log(data);
  render(data);
})

function render (data) {  
  var html = data.map(function(elem, index) {
    return(`<div>
              <strong>${elem.author}</strong>:
              <em>${elem.text}</em>
            </div>`);
  }).join(" ");

  document.getElementById('messages').innerHTML = html;
}

function addMessage(e) {  
  var message = {
    author: document.getElementById('username').value,
    text: document.getElementById('texto').value
  };

  socket.emit('new-message', message);
  return false;
}