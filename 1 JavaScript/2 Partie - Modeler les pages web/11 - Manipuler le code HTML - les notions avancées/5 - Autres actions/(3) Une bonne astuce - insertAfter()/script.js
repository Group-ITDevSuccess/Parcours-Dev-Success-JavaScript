function insertAfter(newElement, afterElement){
    var parent = afterElement.parentNode;
    /*
        Si le dernier élément est le même que l'élément après lequel on veut insérer,
        il suffit de faire appendChild().
     */
    if(parent.lastChild === afterElement){
        parent.appendChild(newElement);
    }
    /*
        Dans le cas contraire, on fait un insertBefore() sur l'élément suivant
     */
    else{
        parent.insertBefore(newElement, afterElement.nextSibling);
    }
}

var paragraph = document.querySelector('p');
var emphasis = document.createElement('em'),
    emphasisText = document.createTextNode(' en emphase légère ');

emphasis.appendChild(emphasisText);

insertAfter(emphasis, paragraph);
