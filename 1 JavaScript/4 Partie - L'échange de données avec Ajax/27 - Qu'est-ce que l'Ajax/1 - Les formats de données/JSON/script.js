var obj = {
    index: 'contenu'
},
    string;

string = JSON.stringify(obj);

alert(typeof string + ' : '+string); // Affiche : "string : {"index":"contenu"}"

obj = JSON.parse(string);
alert(typeof obj + ' : '+obj); // Affiche : "object : [object Object]"
