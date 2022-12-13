var string1 = new String('Test');

var string2= string1.valueOf();

alert(typeof string1);
alert(typeof string2);

function isString(variable){
    return typeof variable.valueOf() === 'string';
    // Si le type de la valeur primitive est "string" alors on retourne "true"
}

alert(isString('Test'));
alert(isString(new String('test')));