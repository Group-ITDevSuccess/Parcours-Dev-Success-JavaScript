var canvas = document.querySelector("#canvas"),
    context = canvas.getContext("2d");

context.beginPath();
context.lineCap = 'round';
context.moveTo(75,20);
context.lineTo(75,130);
context.stroke();

