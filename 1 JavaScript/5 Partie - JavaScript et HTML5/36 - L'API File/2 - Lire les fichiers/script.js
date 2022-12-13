var fileInput = document.querySelector("#file");

    fileInput.addEventListener('change', function () {
        var reader = new FileReader();

        reader.addEventListener('load', function () {
            alert(`Contenu du fichier ${fileInput.files[0].name} : \n\n ${reader.result}`);
        });

        if (reader.readyState === reader.LOADING){
            console.log("La lecture est en cours...")
        }else if (reader.readyState === reader.DONE){
            console.log("La lecture est terminer")
        }else{
            console.log("Aucun donnée n'a encore été chargée")
        }

        reader.readAsText(fileInput.files[0]);
});