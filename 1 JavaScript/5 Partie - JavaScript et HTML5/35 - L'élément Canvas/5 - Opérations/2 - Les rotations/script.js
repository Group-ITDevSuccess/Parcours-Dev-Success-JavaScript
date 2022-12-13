var canvas = document.querySelector("#canvas"),
    context = canvas.getContext("2d");

context.translate(75,75);

context.fillStyle = "teal";
context.rotate((Math.PI/180)*45); // Rotation 45°
context.fillRect(0,0,50,50);

context.fillStyle = "orange";
context.rotate(Math.PI/2); // Rotation 90°
context.fillRect(0,0,50,50);

context.fillStyle = "teal";
context.rotate(Math.PI/2);
context.fillRect(0,0,50,50);

context.fillStyle = "orange";
context.rotate(Math.PI/2);
context.fillRect(0,0,50,50);