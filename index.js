var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.use(express.static('client'));

http.listen(8080, () => {
  console.log('listening on *:8080');
});

io.on('connection', (socket) => {
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('chat', (msg) => {
    console.log(msg);
    io.emit("chat", msg);
  });
});
