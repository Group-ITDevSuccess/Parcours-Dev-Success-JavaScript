/*
var date = '05/26/2011';
date = date.replace(/^(\d{2})\/(\d{2})\/(\d{4})$/, 'le $2/$1/$3');
alert(date);

var total = "J'ai 25 dollar en liquide";
alert(total.replace(/dollars?/, '$'));

var text = "bla bla [b] un peu de texte [/b] bla [b]bla bla en gras[/b] bla bla"
text = text.replace(/\[b\]([\s\S]*?)\[\/b\]/g,  '<strong>$1</strong>');

alert(text);

 */

function preview(){
    var value =  document.getElementById("text").value;

    value = value.replace(/\[b\]([\s\S]*?)\[\/b\]/g,'<strong>$1</strong>'); // Gras
    value = value.replace(/\[i\]([\s\S]*?)\[\/i\]/g,'<em>$1</em>'); // Italique
    value = value.replace(/\[s\]([\s\S]*?)\[\/s\]/g,'<del>$1</del>'); // Barré
    value = value.replace(/\[u\]([\s\S]*?)\[\/u\]/g,'<span style="text-decoration: underline">$1</span>'); // Souligné

    document.getElementById("output").innerHTML = value;
}

