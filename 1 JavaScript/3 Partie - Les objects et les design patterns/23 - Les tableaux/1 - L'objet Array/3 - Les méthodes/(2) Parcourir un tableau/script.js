var myArray = ["C'est", "un", "test"],
    length = myArray.length;
/*
for (var i = 0; i < length; i++){
    console.log(
        `Index : ${i}\n`+
        `Valeur : ${myArray[i]}`
    );
}
 */
myArray.forEach(function (value, index, array){
    console.log(
        `Index : ${index}\n`+
        `Valeur : ${value}\n`+
        `Array : ${array[index]}`
    );
});