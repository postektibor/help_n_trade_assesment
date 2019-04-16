let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);
let port = process.env.PORT || 4000;
const messagesTypes = require('./messagesTypes');

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
  socket.on(messagesTypes.WRITE_CHAT_MESSAGE, function (destinationUserId, myUserId, message) {
    console.log(destinationUserId, myUserId, message)
    io.emit(messagesTypes.WRITE_CHAT_MESSAGE, message);
  });
});

http.listen(port, function () {
  console.log('listening on *:' + port);
});