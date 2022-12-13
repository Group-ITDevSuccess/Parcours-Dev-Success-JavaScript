var dropper = document.querySelector("#dropper");

dropper.addEventListener('drop',function (e) {
    console.log("On a : drop");
    e.preventDefault(); // Annule l'interdiction de drop

    if (e.dataTransfer.getData('text/plain')){
        alert(`On a : ${e.dataTransfer.getData('text/plain')}`);
    }else{
        var files = e.dataTransfer.files,
            filesLen = files.length,
            filenames = "";

        for (var i = 0; i<filenames; i++){
            filenames += `\n ${files[i].name}`;
        }

        alert(`${files.length} fichier(s) : \n ${filenames}`)
    }

    dropper.style.borderStyle = 'solid';
});

dropper.addEventListener('dragenter', function () {
    dropper.style.borderStyle="dashed";
    console.log("On a : dragenter");
});
dropper.addEventListener('dragleave', function () {
    dropper.style.borderStyle="solid";
    console.log("On a : dragleave");
});

//Cette évenements détecte n'importe quel drag & drop qui se termine, autant le mettre sur "document"
dropper.addEventListener('dragend', function () {
    alert("Un Drag & Drop vient de se terminer mais l'événement dragend ne sait pas\n" +
        "si c'est un succès ou non.");
    console.log("On a : dragend");
});

