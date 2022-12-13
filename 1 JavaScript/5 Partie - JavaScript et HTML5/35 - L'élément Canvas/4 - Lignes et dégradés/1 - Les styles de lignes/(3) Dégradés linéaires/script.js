var canvas = document.querySelector("#canvas"),
    context = canvas.getContext("2d");

var linear = context.createLinearGradient(0,0,150,150);
linear.addColorStop(0,'white');
linear.addColorStop(0.5,'#1791a7');
linear.addColorStop(0.5,'orange');
linear.addColorStop(1,'yellow');

context.fillStyle = linear;
context.fillRect(10,10,130,130);