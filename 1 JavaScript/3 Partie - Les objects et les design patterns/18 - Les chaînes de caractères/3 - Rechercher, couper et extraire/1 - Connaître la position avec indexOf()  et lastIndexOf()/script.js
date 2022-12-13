var myString = 'Le JavaScript est plutôt cool';
var result1 = myString.indexOf('JavaScript');
var result2 = myString.lastIndexOf('JavaScript');

if (result1 > -1 || result2){
    console.log(`La chaîne contient le mot "JavaScript" qui débute à la position ${result1} par rapport à la prémière occurence `);
    console.log(`La chaîne contient le mot "JavaScript" qui débute à la position ${result2} par rapport à la dernier occurence `);
}