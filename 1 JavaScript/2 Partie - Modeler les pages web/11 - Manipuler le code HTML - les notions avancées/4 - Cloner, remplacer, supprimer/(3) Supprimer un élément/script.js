var link = document.querySelector('a');

var oldlink = link.parentNode.removeChild(link);

// On supprime l'élément et on le garde en stock

document.body.appendChild(oldlink);
//On réintegre ensuite l'element supprimé ou on veut et quand on veut