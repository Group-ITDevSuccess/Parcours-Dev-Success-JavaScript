/*var number1 = 2, number2 = 2, number3 = 4, result;

var number = 4, text = '4';

result = number1 == number2; // On spécifie deux variable ave  l'opérateur de comparaison entre elles

alert(result)

result = number1 == number3;

alert(result)

result =  number1 < number3;

alert(result)

result = number == text;

alert(result)

result = number === text;

alert(result)

var res, cond1, cond2;

cond1 = 2 > 8;
cond2 = 8 > 2;

res = cond2 && cond1;
alert(res)
 */

/*
if(confirm("Voulez-vous exéuter le code JS de ce page ? ")){
    alert('Le code executé !');
}
 */

var startMessage = 'Votre catégorie : ', endMessage,
    adult =  confirm('Etes-voys majeur ? ');

endMessage =  adult ? '18+' : '-18';

alert(startMessage + endMessage);

var conditionTest = 'Fonctionnera ? Fonctionnera pas ?'

if(conditionTest){
    alert('Fonctionne !')
}else{
    alert('Ne focntionne pas !')
}

var cond1 = '', cond2 = 'Une chaine de caractères';

alert(cond1 || cond2)