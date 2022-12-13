var canvas = document.querySelector("#canvas"),
    context = canvas.getContext("2d");

context.save();
context.translate(40,40);

context.fillStyle = "teal";
context.fillRect(0,0,50,50);
context.restore();

context.fillStyle = "orange";
context.fillRect(0,0,50,50);