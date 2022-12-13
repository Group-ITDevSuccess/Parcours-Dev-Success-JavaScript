var myString = 'Raharison';

var first = myString.charAt(0);
var last = myString.charAt(myString.length - 1);

var firstASCII = myString.charCodeAt(0);
var lastASCII = myString.charCodeAt(myString.length - 1);

alert(`Le primier lettre est ${first} avec code ASCI ${firstASCII} et le dernier est ${last} avec code ASCI ${lastASCII}`);