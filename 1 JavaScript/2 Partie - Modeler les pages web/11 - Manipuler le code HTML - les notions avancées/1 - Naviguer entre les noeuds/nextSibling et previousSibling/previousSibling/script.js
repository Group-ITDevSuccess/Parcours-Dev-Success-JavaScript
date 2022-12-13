var paragraph = document.getElementById('myP');
var child = paragraph.lastChild; // On prend le fernier enfant

while (child){
    if(child.nodeType === 1){
        //C'est un élément HTML
        alert(child.firstChild.data);
    }else{
        alert(child.data);
    }
    child = child.previousSibling;
    // A chaque tour de boucle, on prend l'enfant précedent
}