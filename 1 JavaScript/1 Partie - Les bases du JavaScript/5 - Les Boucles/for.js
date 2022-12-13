/*for (let index = 0; index < 5; index++) {
    alert('Iteration n° '+index);
}*/

/*
for(var noms = '', nom; true;){
    nom =  prompt("Entrer un nom : ");

    if (nom) {
       noms += nom + ' '; 
    } else {
        break;
    }
}
alert(noms);*/

for(var noms = '', nom, i = 0; true;i++){
    nom =  prompt("Entrer un nom : ");

    if (nom) {
       noms += nom + ' '; 
    } else {
        break;
    }
}
alert('Il y a '+i+' noms : \n\n'+noms);