var canvas = document.querySelector("#canvas"),
    context = canvas.getContext('2d');

var logo = new Image();

logo.src = 'logo.jpg';

logo.addEventListener('load', function (){
    var pattern = context.createPattern(logo, 'repeat');
    context.fillStyle = pattern;
    context.fillRect(0,0,150,150);
});
