var myRegex1 = /raclett{1}e/;
var myRegex2 = /raclett{0,2}e/;
var myRegex3 = /raclett{2,}e/;

var texte = "J'ai du raclete comme gouté.";


if (myRegex1.test(texte)){
    // Retourne true si le teste est réussi
    alert(`${myRegex1} On vas manger du raclette !`);
} else if (myRegex2.test(texte)){
    alert(`${myRegex2} On vas manger du raclette !`);
} if (myRegex3.test(texte)){
    alert(`${myRegex3} On vas manger du raclette !`);
} else{
    // Retourne false dans le cas contraire
    alert("Dommage, une prochaine fois !");
}