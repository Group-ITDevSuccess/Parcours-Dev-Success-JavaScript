(function () {
    var dndHandler = {

        draggedElement: null, //Propriéte pointant vers l'élément en cours de déplacement

        // Cet objet est conçu pour être un namespace et va contenir les
        // méthodes que nous allons créer pour notre système de drag & drop
        applyDragEvents: function (element) {
            element.draggable = true;

            var dndHandler = this; // Cette variable est nécessaire pour que
                //que l'événement "drastart accède facilement au namespace "dndhandler"

            element.addEventListener('dragstart', function (e) {
                dndHandler.draggedElement = e.target;
                //On sauvegarte l'élement en cours de déplacement
                e.dataTransfer.setData('text/plain',''); // Necessaire poure Firefox
            });
        },

        applyDropEvents: function (dropper) {
            dropper.addEventListener('dragover', function (e) {
                e.preventDefault(); // On autorise le drop d'élements
                this.className = 'dropper drop_hover'; //Et on applique le style adéquat à notre zone de drop qauand une élement la survole
            });

            dropper.addEventListener('dragleave', function () {
                this.className = 'dropper';
            });

            dropper.addEventListener('drop',function (e) {
                var target = e.target,
                    draggedElement = dndHandler.draggedElement,
                    //Récupération de l'élement concerné
                    cloneElement = draggedElement.cloneNode(true);

                while (target.className.indexOf('dropper') == -1){
                    // Cette boucle de reeonter jusqu'a la zone de drop parente
                    target = target.parentNode;
                }

                target.className = 'dropper';

                cloneElement = target.appendChild(cloneElement);
                // Ajout de l'élement cloné à la zone de drop actuelle
                dndHandler.applyDragEvents(cloneElement);
                //Nouvelle appliaction des événement perdus lors du cloneNode();

                draggedElement.parentNode.removeChild(draggedElement);
                //Suppression de l'élément d'origine
            });
        }

    };
    // Ici se trouvera le code qui utilisera les méthodes de notre namespace
    // « dndHandler »

    var elements = document.querySelectorAll(".draggable"),
        elementsLen = elements.length;

    for (var i = 0; i<elementsLen; i++){
        dndHandler.applyDragEvents(elements[i]);
        //Appliacation des paramètre nécessaires aux éléments déplacables
    }

    var droppers = document.querySelectorAll('.dropper'),
        droppersLen = droppers.length;

    for (var i = 0 ; i < droppersLen; i++){
        dndHandler.applyDropEvents(droppers[i]);
        // Application des évenements necessaires au zones de drop
    }

})();