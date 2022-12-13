function loadFile(file) {
    var xhr = new XMLHttpRequest();

    // On souhaite juste récupérer le contenu du fichier. GET suffit amplement:
    xhr.open('GET', file);

    xhr.addEventListener('readystatechange', function (){
        // On gère ici une requête asynchrone
        if (xhr.readyState === XMLHttpRequest.DONE && (xhr.status === 200 || xhr.status ===0) ){
            // Si le fichier est chargé sans erreur
            document.getElementById('fileContent').innerHTML = `<span>${xhr.responseText}</span>`; // Et on affiche !
        }
    });

    xhr.send(null); // La requête est prête, on envoie tout !

    (function (){
        // Comme d'habitude, une IIFE pour éviter les variables globales
        var inputs = document.getElementsByTagName('input'),
            inputsLen = inputs.length;

        for (var i = 0; i < inputsLen; i++){
            inputs[i].addEventListener('click', function (){
                loadFile(this.value); // A chaque clique, un fichier sera chargé dans la page
            });
        }
    })();
}