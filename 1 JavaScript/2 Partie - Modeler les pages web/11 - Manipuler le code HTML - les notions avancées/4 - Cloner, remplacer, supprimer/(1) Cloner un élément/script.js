// On va cloner un élément crée:
var hr1 = document.createElement('hr');
var hr2 = hr1.cloneNode(false); // Il n'a pas d'enfants..

//Ici, on clone un élément existant:
var paragraph1 = document.getElementById('myP');
var paragraph2 = paragraph1.cloneNode(true);

/*
Et attention, l'éléent est cloné, mais pas "inséré" tant
qu'on n'a pas appele appendChild().
 */
paragraph1.parentNode.appendChild(paragraph2);

alert(paragraph1);
