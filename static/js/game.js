//region base
var canvas = document.getElementById('canvas');
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;
var context = canvas.getContext('2d');
context.clearRect(0, 0, canvas.width, canvas.height);
var socket = io();
//endregion
var map;
var players;
const BASE_SIZE = 32;

//Нажатие на "Войти в игру"
$(".btn.start-game").click(function (e) {
    e.preventDefault();
    $(".main-menu").hide();
    $("canvas").show();
    let auth_data = {
        login:$("#input_login"),
        pass:$("#input_pass")
    };
    //Отправляем запрос на вход в игру
    socket.emit("join",auth_data);
});
//Слушаем подключение к игре
socket.on("join",function (data) {
    //Получаем все данные от сервера
    map = data.map;
    players = data.players;
    //Запускаем отриовку игры
    console.log(map);
    StartGame();
});
function StartGame(){
    const fps = setInterval(() => {
        //Очищаем canvas
        context.setTransform(1, 0, 0, 1, 0, 0);
        context.clearRect(0, 0, canvas.width, canvas.height);
        //Отрисовываем игрока по центру
        context.fillStyle = "#333333";
        context.fillRect(canvas.width/2-BASE_SIZE/2,canvas.height/2-BASE_SIZE,BASE_SIZE,BASE_SIZE*2);
        //Зная координаты игрока, смещаем контекст
        context.translate(
            1,
            1);//TODO
        //Отрисовываем карту
        for(let chank =0; chank<map.length;chank++){
            for(let row = 0; row<map[chank].length;row++){
                for(let column = 0;column<map[chank][row].length;column++){
                    context.fillStyle = "#999999";
                    context.fillRect(0,0,BASE_SIZE,BASE_SIZE);//TODO
                }
            }
        }
        //Отрисовываем остальных игроков

    }, 1000 / 60);
}