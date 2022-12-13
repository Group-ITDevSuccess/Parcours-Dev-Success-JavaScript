var link = document.querySelector('a');
var newLabel = document.createTextNode('et un hyperlien !');

link.replaceChild(newLabel, link.firstChild);