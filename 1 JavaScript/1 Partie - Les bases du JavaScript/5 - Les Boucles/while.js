/*var number = 1;

while (number < 10) {
    number++;
}

alert(number);*/

var noms = '', nom ; 
//var poursuivre = true;


// while (poursuivre) {
while (true) {
    nom = prompt('Entrer un nom : ');

    if (nom) {
        noms += nom + ' ';
    }else{
        // poursuivre = false;
        break;
    }
}

alert(noms);