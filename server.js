//region Зависимости
var express = require('express');
var http = require('http');
var path = require('path');
var socketIO = require('socket.io');
var app = express();
var server = http.Server(app);
var io = socketIO(server);
app.set('port', 5000);
app.use('/static', express.static(__dirname + '/static'));
//endregion
//region Маршруты
app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname, 'index.html'));
});
//endregion
//region Запуск сервера
server.listen(5000, function() {
    console.log('Start server on port 5000');
});

//При подключении кого-то
io.on('connection', function(socket) {
    socket.on('new player', function() {
    });
});
