var myDiv = document.getElementById("myDiv"),
    results = document.getElementById("results");

myDiv.addEventListener('mouseover', function (){
    results.innerHTML += "Le curseur vient d'entrer. <br/>";
});

myDiv.addEventListener('mouseout', function (){
    results.innerHTML += "Le curseur vient de sortir. <br/>";
});