//region Зависимости
var MapGenerate = require('./server/class/MapGenerate');
var Player = require('./server/class/Player');
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
//endregion

//Создаем карту
var map = MapGenerate.Generate();
//Получаем всех игроков
var players={};
var count_players = 0;

//При подключении кого-то
io.on('connection', function(socket) {
    //Слушаем вход
    socket.on('join', function() {
        //Добавляем игрока на сервер
        count_players++;
        players[socket.id] =  new Player(1,1,"player_"+socket.id);
        //отправляем карту и состояние игроков
        var data = {
            map:map,
            players:players
        };
        socket.emit("join",data);
    });
    socket.on('disconnect',function () {
        //Удаляем игрока
        delete players[socket.id];
        count_players--;
    });
});
