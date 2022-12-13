var xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', function (){

    if (xhr.readyState === xhr.DONE && xhr.status === 200){ // Le status 200 signifie que tous s'est bien passé
        // La constante DONE appartient à l'Objet XMLHttpRequest et n'est pas globale
        // Votre code
    }
}, false);