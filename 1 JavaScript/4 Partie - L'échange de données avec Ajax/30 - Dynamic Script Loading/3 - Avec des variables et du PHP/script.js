function sendDSL() {
    var scriptElement = document.createElement('script');
    scriptElement.src = `URL/dsl_script.php?nom=${prompt('Quel est votre pseudo ? ')}`;

    document.body.appendChild(scriptElement);
}

function receiveMessage(message){
    alert(message);
}