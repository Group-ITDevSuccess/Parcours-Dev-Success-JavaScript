function area() {
    var myVar = 1;

    function show(){
        alert(myVar);
    }

    setTimeout(show, 1000);
}

area(); // On exécute la fonction, ce qui a crée la variables "myVar"
