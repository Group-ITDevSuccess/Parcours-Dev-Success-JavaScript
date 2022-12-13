var noms = [], nom;

while (nom = prompt("Entrez un prénom : ")){
    noms.push(nom);
}

if(noms.length > 0){
    alert(noms.join(' '));
}else{
    alert("Il n'y a aucun prénom en mémoire !");
}