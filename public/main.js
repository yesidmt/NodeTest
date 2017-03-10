var socket = io.connect('https://ws-vet-node.herokuapp.com/', { 'forceNew': true });
socket.on('connect', function (data) {
        socket.emit('storeClientInfo', { customId:"000CustomIdHere0000" });
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