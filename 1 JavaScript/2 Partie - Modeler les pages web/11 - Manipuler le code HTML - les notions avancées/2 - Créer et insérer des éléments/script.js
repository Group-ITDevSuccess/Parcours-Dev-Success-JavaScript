// CREATION DE L'ELEMENT :
var newLink = document.createElement('a');

// AFFECTER DES ATTRIBUS :
newLink.id = 'sdz_link';
newLink.href = 'https://www.openclassrooms.com';
newLink.title = 'Découvert OpenClassrooms';
newLink.setAttribute('tabindex', '10');

document.getElementById('myP').appendChild(newLink);

var newLinkText = document.createTextNode("Le site OpenClassrooms");

newLink.appendChild(newLinkText);