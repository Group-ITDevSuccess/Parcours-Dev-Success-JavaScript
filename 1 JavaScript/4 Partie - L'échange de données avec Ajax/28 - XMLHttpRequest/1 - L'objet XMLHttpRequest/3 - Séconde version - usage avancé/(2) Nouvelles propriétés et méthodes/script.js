var xhr = new XMLHttpRequest();

xhr.timeout = 10000; // La requ^te se terminera si elle n'a pas abouti au bout de 10 secondes

xhr.open('GET', 'http://exemple.com');

xhr.overrideMimeType('text/xml');
// L'envoi de la requête puis le traitement des données reçuses peuvent se faire

xhr.withCredentials = true; // Avec "true", l'envoi des cookies et des sessions est bien effectuer

xhr.send();

xhr.addEventListener('progress', function (e){
    element.innerHTML = e.loaded + ' / '+e.total;
});