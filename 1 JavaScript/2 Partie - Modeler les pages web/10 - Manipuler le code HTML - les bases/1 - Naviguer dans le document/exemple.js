/*
var text = "Variable globale !";

(function (){
    // On utilise un IIFE pour "isoler" du code
    var text = "Variable locale ! ";

    alert(text); // Forcement, la variable locale prend le dessus

    alert(window.text); /*
        Mais il est toujours possible d'accéder à la variable globale grâce à l'object " window ".

})();
*/

(function (){
    text = 'Variable accessible ! '; // Cette variable n'a jamais été déclarée
        // pouratant on lui attribue une valeur
})();

alert(text); 