var canvas = document.querySelector("#canvas"),
    context = canvas.getContext("2d");

var radial1 = context.createRadialGradient(0,0,10,100,20,150); // Fond
radial1.addColorStop(0,'#ddf5f9');
radial1.addColorStop(1,'#ffffff');

var radial2 = context.createRadialGradient(75,75,10,82,70,30); // bulle orange
radial2.addColorStop(0,'#ffc55c');
radial2.addColorStop(0.9,'#ffa500');
radial2.addColorStop(1,'rgba(245,160,6,0)');

var radial3 = context.createRadialGradient(105,105,20,112,120,50); // bulle truquoise
radial3.addColorStop(0,'#86cad2');
radial3.addColorStop(0.9,'#61aeb6');
radial3.addColorStop(1,'rgba(159,209,216,0)');


context.fillStyle = radial1;
context.fillRect(10,10,130,130);
context.fillStyle = radial2;
context.fillRect(10,10,130,130);
context.fillStyle = radial3;
context.fillRect(10,10,130,130);