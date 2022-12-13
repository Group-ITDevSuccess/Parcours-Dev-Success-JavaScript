if  (!Array.isArray){
    // Si isArray() n'existe pas, alors on crée notre méthode alternative:
    Array.isArray = function (element){
        return Object.prototype.toString.call(element) == '[object Array]';
    }
}

alert(Array.isArray([])); // Affiche : "true"
alert(Array.isArray({})); // Affiche : "false"