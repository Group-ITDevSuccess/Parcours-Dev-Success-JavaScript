/*
var myArray = ['Livre 1'],
    result = myArray.push('Livre 2', 'Livre 3');

alert(myArray); // Affiche : "Livre 1, Livre 2, Livre 3"
alert(result); // Affiche : "3"

result = myArray.pop();

alert(myArray); // Affiche : "Livre 1, Livre 3"
alert(result); // Affiche : "Livre 3"
 */

var myArray = ['Livre 3'],
    result = myArray.unshift('Livre 1', 'Livre 2');

alert(myArray); // Affiche : "Livre 1, Livre 2, Livre 3"
alert(result); // Affiche : "3"

result = myArray.shift();

alert(myArray); // Affiche : "Livre 2, Livre 3"
alert(result); // Affiche : "Livre 1"
