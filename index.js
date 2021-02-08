var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('*', function(req, res){
    // here we emit event to all connected clients
    io.emit('message' ,'Wecome son')
    res.send('Socket Server Run');
});

io.on('connection', function(socket){
    // here we emit event to the connected client
  socket.emit('listening', {name: 'Ahmed Hesham' ,age: 25})
});

http.listen(3086, 'localhost', function(){
  console.log('listening on http://localhost:3086');
});