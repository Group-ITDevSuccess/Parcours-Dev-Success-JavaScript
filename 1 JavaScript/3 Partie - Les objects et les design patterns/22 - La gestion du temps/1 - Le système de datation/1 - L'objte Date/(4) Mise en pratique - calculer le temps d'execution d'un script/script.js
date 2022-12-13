var firstTimeStamp = new Date().getTime(); // On obtient le timestamp avant l'exécution

function show(){
    console.log("Salam Alaikum Muriel");

    var a = 2;

    console.log(`On a le nombre ${a}`);
}

show(); // La fonction travaille

var secondTimeStamp = new Date().getTime(), // On récupère le timestamp après l'exécution
    result = secondTimeStamp - firstTimeStamp; // On fait la soustraction

alert("Le temps d'exécution est de : "+result+" millisecondes.");