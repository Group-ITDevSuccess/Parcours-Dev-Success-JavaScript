(function () {
    function createThumbnail(file) {
        var reader = new FileReader();

        reader.addEventListener('load',function () {
            // Affichage de l'image
            var imgElement = document.createElement('img');
            imgElement.style.maxWidth = '150px';
            imgElement.style.maxHeight = '150px';
            imgElement.src = this.result;
            prev.appendChild(imgElement);
        });
        reader.readAsDataURL(file);
    }

    var allowedTypes = ['png', 'jpg', 'jpeg', 'gif'],
        fileInput = document.querySelector("#file"),
        prev = document.querySelector('#prev');

    fileInput.addEventListener('change',function () {
        //Analyse des fiichiers et création de sprévisualisations
        var files = this.files,
            filesLen = files.length,
            imgType;

        for (var i = 0; i < filesLen; i++){
            imgType = files[i].name.split('.');
            imgType = imgType[imgType.length - 1].toLowerCase();
            // On utilise toLowerCase() pour éviter les extensions en majuscules

            if (allowedTypes.indexOf(imgType) !== -1){
                // Le fichier est bien une image supportée, il reste plus qu'a l'affichier
                createThumbnail(files[i]);
            }
        }

    });


})();