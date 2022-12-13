/*var sayHello = function () {
    alert("Salam Alaikum");
};

sayHello();*/
/*
//Code externe

(function(){
    //Code isole
})();

//Code externe
*/

/*
var text = 'noir';

(function(){
    var text = 'blanc';
    alert('Dans le zone isolée, la couleur est : '+text);
})();

alert('Dans le zone non-isolée, la couleur est : '+text);*/

var sayHello = (function(){
    return 'Yop !';
})();

alert(sayHello);