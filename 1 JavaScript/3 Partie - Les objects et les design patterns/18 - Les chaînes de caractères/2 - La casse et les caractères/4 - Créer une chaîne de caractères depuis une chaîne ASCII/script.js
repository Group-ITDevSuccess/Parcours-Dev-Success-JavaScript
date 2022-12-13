/*
var myString = String.fromCharCode(74, 97, 118, 97, 83, 99, 114, 105, 112, 116);

alert(myString);

 */

function listenKey(event){
    var key = event.keyCode;

    console.log(`ASCII : ${key} <=> ${String.fromCharCode(key)} `);
}