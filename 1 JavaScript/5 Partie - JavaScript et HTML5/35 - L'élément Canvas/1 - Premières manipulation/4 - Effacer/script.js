var canvas = document.querySelector("#canvas");
var context = canvas.getContext('2d');

context.lineWidth = "5";
context.strokeStyle = "gold";
context.strokeRect(50,35, 50, 80);

context.fillStyle = "rgba(23, 145, 167, 0.5)";
context.fillRect(40,25, 40, 40);

context.clearRect(45,40,30,10);