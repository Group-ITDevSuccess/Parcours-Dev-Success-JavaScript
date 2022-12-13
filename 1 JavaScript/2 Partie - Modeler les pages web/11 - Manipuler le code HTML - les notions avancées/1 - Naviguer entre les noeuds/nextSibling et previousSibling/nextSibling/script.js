var paragraph = document.getElementById('myP');
var first = paragraph.firstChild;
var next = first.nextSibling;

alert(next.firstChild.data); // Affiche " un lien "