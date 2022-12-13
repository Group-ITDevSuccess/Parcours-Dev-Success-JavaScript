//POUR LES BOUCLES :
var text = '', i = 0;

var element = document.getElementById('myDiv');

while (i < 3){
    text += ' ' + prompt("Entrer votre nom : ");
    i++;
}


element.innerHTML ='Votre nom est : '+ text;