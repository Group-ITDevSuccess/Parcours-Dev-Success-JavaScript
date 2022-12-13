var myDiv = document.getElementById("myDiv"),
    results = document.getElementById("results");

myDiv.addEventListener('mouseover', function (e){
    var relatedTarget = e.relatedTarget;

    while (relatedTarget != myDiv && relatedTarget.nodeName != 'BODY' && relatedTarget != document){
        relatedTarget = relatedTarget.parentNode;
    }

    if(relatedTarget != myDiv){
        results.innerHTML += "Le curseur vient d'entrer. <br/>";
    }

});

myDiv.addEventListener('mouseout', function (e){
    var relatedTarget = e.relatedTarget;

    while (relatedTarget != myDiv && relatedTarget.nodeName != 'BODY' && relatedTarget != document){
        relatedTarget = relatedTarget.parentNode;
    }

    if(relatedTarget != myDiv){
        results.innerHTML += "Le curseur vient d'entrer. <br/>";
    }
});