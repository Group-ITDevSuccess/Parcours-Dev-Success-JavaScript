var display = (function () {
    var myVar = 0; // Déclaration de la variable pseudo-statique

    return  function (value){
        if (typeof value != 'undefined'){
            myVar = value;
        }
        alert(myVar);
    }
})();

display();
display(42);
display();