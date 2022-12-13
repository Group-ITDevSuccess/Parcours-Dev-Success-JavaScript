var myString = 'Le JavaScript est tres cool';

var nom = myString.substring(3, myString.indexOf(' e'));

var comment = myString.substring(myString.lastIndexOf(' ')+1);

alert(`Le nom est ${nom} et le commentaire est ${comment}`);
alert(`Soit ${nom.substring().substr(0, 4)}`);
alert(`Le nom est pertiant ${nom.slice(0, -6)}`);
