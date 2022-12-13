var myString = "Ma chaîne de caractère"; // String primitif
var myRealString = new String("Ma chaîne de caractère");

if (myString instanceof String){
    alert("myString est un instance de String")
}else if (myRealString){
    alert("C'est myRealString qui est l'instance de String")
}

/*
var myArray = []; // Tableau primitif
var myRealArray = new Array();

var myObject = {}; // Objet primitif
var myRealObject = new Object();

var myBoolean = true; // booléen primitif
var myRealBoolean = new Boolean("true");

var myNumber = 12; // Nombre primitif
var myRealNumber = new Number("42");
 */