var canvas = document.querySelector("#canvas"),
    context = canvas.getContext('2d');

context.fillStyle = 'rgba(23, 145, 167, 1)';
context.fillRect(50,50,50,50);

context.font = "bold 22pt Calibri,Geneva,Arial";
context.fillStyle = "#fff";
context.fillText("js", 78,92);
