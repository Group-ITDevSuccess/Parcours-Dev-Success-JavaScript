// On crée l'élément conteneur
var mainDiv =  document.createElement("div");
mainDiv.id = 'divTP2';

// On crée tous les noeuds textuels, pour plus de facilité
var languages = [
  document.createTextNode('JavaScript'),
  document.createTextNode('JScript'),
  document.createTextNode('ActionScript'),
  document.createTextNode('EX4'),
];

// On crée le paragraphe
var paragraph = document.createElement('p');
var paragraphText = document.createTextNode("Langages basés sur ECMAScript : ");
paragraph.appendChild(paragraphText);

// On crée la liste, et on boucle pour ajouter chaque item
var uList = document.createElement('ul'), uItem;

for(var i = 0, c = languages.length; i < c ; i++ ){
    uItem = document.createElement('li');

    uItem.appendChild(languages[i]);
    uList.appendChild(uItem);
}

// On insère le tout dans mainDiv
mainDiv.appendChild(paragraph);
mainDiv.appendChild(uList);

// On insère mainDiv dans le body
document.body.appendChild(mainDiv);