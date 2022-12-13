var myArray1 = [1, 2, 3, 4, 5];
var myArray2 = [1, null, 4, 5];

var result1 = myArray1.splice(1, 2);
var result2 = myArray2.splice(1, 1, 2, 3);

console.log(`
    myArray1 = ${myArray1}\n
    myArray2 = ${myArray2}\n
    -----------------------\n
    result1 = ${result1}\n
    result2 = ${result2}\n
`);