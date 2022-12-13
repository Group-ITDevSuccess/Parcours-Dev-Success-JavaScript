var canvas = document.querySelector("#canvas"),
    context = canvas.getContext('2d');

var logo = new Image();

logo.src = 'logo.jpg';

logo.addEventListener('load', function (){
    context.drawImage(logo, 99, 27, 100, 100, 25, 25, 100, 100);
});
