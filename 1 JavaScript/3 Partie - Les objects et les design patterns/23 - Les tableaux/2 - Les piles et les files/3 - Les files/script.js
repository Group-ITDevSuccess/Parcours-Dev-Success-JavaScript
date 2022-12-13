/*
var myArray = ['Livre 1, Livre 2'],
    result = myArray.push('Livre 3', 'Livre 4');

alert(myArray); // Affiche : "Livre 1, Livre 2, Livre 3, Livre 4"
alert(result); // Affiche : "4"

result = myArray.shift();

alert(myArray); // Affiche : "Livre 2, Livre 3, Livre 4"
alert(result); // Affiche : "Livre 1"
 */

var myArray = ['Livre 3', 'Livre 4'],
    result = myArray.unshift('Livre 1', 'Livre 2');

alert(myArray); // Affiche : "Livre 1, Livre 2, Livre 3, Livre 4"
alert(result); // Affiche : "4"

result = myArray.pop();

alert(myArray); // Affiche : "Livre 1, Livre 2, Livre 3"
alert(result); // Affiche : "Livre 4"
