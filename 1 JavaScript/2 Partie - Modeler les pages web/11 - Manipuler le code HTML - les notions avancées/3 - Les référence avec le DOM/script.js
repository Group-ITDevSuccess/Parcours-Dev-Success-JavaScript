var newLink = document.createElement('a');
var newLinkText = document.createTextNode('Le site OpenClassrooms');

newLink.id = 'sdz_link';
newLink.href = 'https://www.openclassrooms.com';

newLink.appendChild(newLinkText);

document.getElementById('myP').appendChild(newLink);

// On récupère, via ID, l'elément fraîchement inséré.
var sdzLink = document.getElementById('sdz_link');

sdzLink.href = 'https://www.openclassrooms.com/forum.html';

// newLink.href affiche bien la nouvelle URL:
alert(newLink.href);