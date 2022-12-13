var canvas = document.querySelector("#canvas");
var context = canvas.getContext('2d');

context.strokeStyle = "rgb(23, 145, 167)";

context.beginPath();
context.moveTo(20,20); // 1er point
context.lineTo(130,20); // 2e point
context.lineTo(130,50); // 3e
context.lineTo(75,130); // 4e
context.lineTo(20,50); // 5e
context.closePath(); // On relie le 5e au 1er

context.stroke();