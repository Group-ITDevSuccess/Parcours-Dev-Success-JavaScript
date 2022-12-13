function sendDSL() {
    var scriptElement = document.createElement('script');
    scriptElement.src = `URL/dsl_script_json.php`;

    document.body.appendChild(scriptElement);
}

function receiveMessage(json){
    var tree = '',
        nbItems, i;

    for (node in json){
        tree += node + "\n";
        nbItems = json[node].length;

        for (i = 0; i < nbItems; i++){
            tree += '\t' + json[node][i] + '\n';
        }
    }
    alert(tree);
}