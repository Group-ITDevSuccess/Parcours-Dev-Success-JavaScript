function sendForm() {
    var nom = document.getElementById("nom").value;

    if (nom){// Si c'est OK
        document.getElementById("myForm").submit(); // On envoi le formulaire
    }
}

function receiveData(data){
    alert('Votre pseudo est "'+data+'"');
}