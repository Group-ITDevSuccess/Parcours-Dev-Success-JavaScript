var link = document.getElementById("myLink");

var href =  link.getAttribute('href'); // On récupère l'attribut " href "

alert(href);

link.setAttribute('href', 'http://www.siteduzero.com'); // On édite l'attribut " href "