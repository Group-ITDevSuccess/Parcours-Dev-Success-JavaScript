(function () {
    var searchElement = document.getElementById('search'),
        results = document.getElementById('results'),
        selectedResult = -1, // Permet de savoir quel résultat est sélectionné : - signifie "aucune sélection"
        previousRequest,// On stocke notre précédente requête dans cette variable
        previousValue = searchElement.value; // On fait de même avec la valeur précédente valeur

    function getResults(keywords) {
        // Effecture une requête et récupère les résultats
        var xhr = XMLHttpRequest();
        xhr.open('GET', `./search.php?s=${encodeURIComponent(keywords)}`);

        xhr.addEventListener('readystatechange', function (){
           if (xhr.readyState == 4 && xhr.status == 200){
               displayResults(xhr.responseText);
           }
        });
        xhr.send(null);

        return xhr;
    }

    function displayResults(response) {
        // Affiche les résultats d'une requête

        results.style.display = response.length ? 'block' : 'none';
        //On cache le conteneur si on'a pas de résultats

        if (response.length){
            // On ne modifie les résultats que si on en a obtenu
            response = response.split('|');
            var responseLen = response.length;

            results.innerHTML = ''; // On vide les résultats

            for (var i = 0, div; i < responseLen;i++){
                div = results.appendChild(document.createElement('div'));
                div.innerHTML = response[i];

                div.addEventListener('click', function (e){
                    chooseResult(e.target);
                });
            }
        }
    }

    function chooseResult(result) {
        // Choisit un des résultats d'une requête et gére tous ce qui y est attaché

        searchElement.value = previousValue = result.innerHTML;
        // On change le contenu du champ de recherche et on enregistre en tant que précédente valeur
        results.style.display = 'none'; // On cache les résultats
        result.className = ''; // On supprime l'effet de focus
        selectedResult = -1; // On remet la sélection à zéro
        searchElement.focus(); // Si le resultat à été choisi par le biais d'un clique alors la focus est perdu,
                                // donc on le réattribue
    }

    searchElement.addEventListener('keyup', function (e){
        var divs = results.getElementsByTagName('div');

        if (e.keyCode == 38 && selectedResult > -1){
            // Si la tocue pressée est le flèche "haut"
            divs[selectedResult--].className = '';

            if (selectedResult > -1){
                // Cette condition évite une modification de childNodes[-1],
                // qui n'existe pas
                divs[selectedResult].className = 'result_focus';
            }
        }else if (e.keyCode == 40 && selectedResult < divs.length -1){
            // Si la touche pressée est la flèche "bas"
            results.style.display ='block'; // On affiche les résultats
            if (selectedResult > -1){
                // Cette condition évite une modofiaction de childNodes[-1],
                // qui n'exitste pas
                divs[selectedResult].className ='';
            }
            divs[++selectedResult].className = 'result_focus';
        }else if (e.keyCode == 13 && selectedResult > -1){
            // Si la toche pressée est "Entrée"
            chooseResult(divs[selectedResult]);
        }else if (searchElement.value != previousValue){
            // Si le contenu du champ de recherche a changé
            previousValue = searchElement.value;

            if (previousRequest && previousRequest.readyState < XMLHttpRequest.DONE){
                previousRequest.abort();
                // Si on a toujours une requête en cours, on l'arrête
            }
            previousRequest = getResults(previousValue);
            //On stocke le nouvelle requête

            selectedResult = -1;
            // On remet la sélection à zéro à chaque caractère écrit
        }
    }

    );
})();