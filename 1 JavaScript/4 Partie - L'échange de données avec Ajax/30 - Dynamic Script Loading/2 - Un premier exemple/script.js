function sendDSL() {
    var scriptElement = document.createElement('script');
    scriptElement.src = 'URL/dsl_script_json.php';

    document.body.appendChild(scriptElement);
}

function receiveMessage(message){
    alert(message);
}