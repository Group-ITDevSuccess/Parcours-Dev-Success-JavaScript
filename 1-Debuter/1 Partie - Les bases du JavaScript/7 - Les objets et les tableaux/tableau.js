/*
var myArray = ['Muriel', 'TSIDIANY', 'Raharison'];

var autreArray = new Array('Muriel', 'TSIDIANY', 'Raharison', 'Mikael', 'Sadjade');*

//myArray[1] = 'NOM';
alert(myArray[1]);

myArray.push('Mikael');

alert(myArray);

myArray.unshift('Sadjade');

alert(myArray);

myArray.shift();

alert(myArray);

myArray.pop();

alert(myArray);*/
/*
var nom = "TSIDIANY Raharison Muriel",
    tableauNom = nom.split(' '),
    joinNom = tableauNom.join('_');

alert(nom);
alert(tableauNom);
alert(joinNom);*/
/*
var myArray = ['Muriel', 'TSIDIANY', 'Raharison'];

for (var i = 0, c = myArray.length; i < c; i++){
    alert(myArray[i]);
}*/

var familly = {
    self: 'Sebastien',
    sister: 'Laurence',
    brother: 'Ludovic',
    cousin_1: 'Pauline',
    cousin_2: 'Guillaume'
};

// alert(familly.brother);
// alert(familly['cousin_1']);
// familly['uncle'] = 'Didier';
// alert(familly.uncle);

for(var id in familly){
    alert(familly[id]);
}
