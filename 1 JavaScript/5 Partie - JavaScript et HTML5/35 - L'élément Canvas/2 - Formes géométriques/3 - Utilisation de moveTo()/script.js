var canvas = document.querySelector("#canvas");
var context = canvas.getContext('2d');

context.strokeStyle = "rgb(23, 145, 167)";

context.beginPath(); // Le cercle extérieur
context.arc(75,75, 40,0, Math.PI); // Ici le calcule est simple
context.stroke();

context.beginPath(); // Le boucle, un arc de cercle
context.arc(75,75, 50,0, Math.PI*2); // Ici le calcule est simple
context.fill();

context.moveTo(41, 58); // L'oeuil gauche
context.arc(55,70, 20,(Math.PI/180)*220, (Math.PI/180)*320); // Ici le calcule est simple


context.moveTo(81, 58); //  L'oeuil droite
context.arc(95,70, 20,(Math.PI/180)*220, (Math.PI/180)*320); // Ici le calcule est simple
context.stroke();
