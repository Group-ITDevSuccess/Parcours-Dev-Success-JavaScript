var canvas = document.querySelector("#canvas");
var context = canvas.getContext('2d');

context.strokeStyle = "gold";

context.beginPath();
context.moveTo(131, 119);
context.bezierCurveTo(131, 126, 126, 131, 119, 131);
context.lineTo(30, 131);
context.bezierCurveTo(23,131,18,126,18,119);
context.lineTo(18,30);
context.bezierCurveTo(18,23,23,18,30,18);
context.lineTo(119,18)
context.bezierCurveTo(126,18,131,23,131,30);
context.lineTo(131,119);
context.closePath();
context.fill();

context.font = "68px Calibri,Geneva,Arial";
context.fillStyle = "white";
context.fillText("js", 84, 112);