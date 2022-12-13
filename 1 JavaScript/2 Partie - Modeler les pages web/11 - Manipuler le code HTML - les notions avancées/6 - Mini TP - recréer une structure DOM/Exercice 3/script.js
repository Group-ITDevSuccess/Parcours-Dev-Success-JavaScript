// On crée l'élément conteneur
var mainDiv = document.createElement("div");
mainDiv.id = "divTP3";

// On crée tous les noeuds textuels, pour plus de facilité
var langague = [
    [document.createTextNode('JavaScript'), document.createTextNode('JavaScript est un langage de programmation de scripts surtout utilisé dans le page web interactives' +
    'mais aussi coté serveur')],
    [document.createTextNode('JScript'), document.createTextNode('JScript est le nom générique ' +
        'de plusieurs implémentations d\'ECMAScript3 créées par Microsoft.')],
    [document.createTextNode('ActionScript'), document.createTextNode('ActionScript est le langage ' +
        'de programmation utilisé au sein d\'applications clientes ' +
    '(Adode Flash, Adobe Flex) et serveur (Flash media server, JRun, Macromedia Generator).')],
    [document.createTextNode('EX4'), document.createTextNode('ECMAScript for XML (E4X) est une extension ' +
        'XML au langage ECMAScript')]
];


// On crée le paragraphe
var paragaph = document.createElement('p'),
    paragraphText = document.createTextNode('Langages basés sur ECMAScript : ');

paragaph.appendChild(paragraphText);

// On crée la liste, et on boucle pour ajouter chaque item
var dList = document.createElement("dl");

for(var i = 0, c = langague.length; i < c; i++){

    for(var j = 0; j < 2; j++){
        if(j%2 ===0){
            var dText = document.createElement("dt");
            dText.appendChild(langague[i][j]);
            dList.appendChild(dText).append(" : ");
        }else{
            var dDef = document.createElement("dd");
            dDef.appendChild(langague[i][j]);
            dList.appendChild(dDef);
        }
    }
}

// On insère le tout dans mainDiv
mainDiv.appendChild(paragaph);
mainDiv.appendChild(dList);

// On insère mainDiv dans le body
document.body.appendChild(mainDiv);
