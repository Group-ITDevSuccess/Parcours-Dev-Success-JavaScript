var dropper = document.querySelector("#dropper");

dropper.addEventListener('dragenter', function (/*e*/) {
    dropper.style.borderStyle="dashed";
});
dropper.addEventListener('dragleave', function (/*e*/) {
    dropper.style.borderStyle="solid";
});

//Cette évenements détecte n'importe quel drag & drop qui se termine, autant le mettre sur "document"
dropper.addEventListener('dragend', function (/*e*/) {
    alert("Un Drag & Drop vient de se terminer mais l'événement dragend ne sait pas\n" +
        "si c'est un succès ou non.");
});

dropper.addEventListener('drop',function (e) {
    e.preventDefault(); // Annule l'interdiction de drop

    alert("Vous avez bien déposé votre élément !");

    // Il est nécessaire d'ajouter cela car sinon le style appliqué par
    // l'événement « dragenter » restera en place même après un drop :

    dropper.style.borderStyle = 'solid';
});