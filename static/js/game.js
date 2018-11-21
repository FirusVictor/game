//region base
const canvas = document.getElementById('canvas');
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;
var context = canvas.getContext('2d');
context.clearRect(0, 0, canvas.width, canvas.height);
var socket = io();
//endregion

$(".btn.start-game").click(function (e) {
    e.preventDefault();
    $(".main-menu").hide();
    $("canvas").show();
    context.fillStyle = "#333";
    context.fillRect(0,0,100,100);
});