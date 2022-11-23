// Creation de conteneur <div id = "divTP4>...</div> :
var mainDiv = document.createElement("div");
mainDiv.id = "divTP4";

// Création de formulaire form:
var mainForm = document.createElement("form");
mainForm.enctype = "multipart/form-data";
mainForm.method = "post";
mainForm.action = "upload.html";

// Création de fieldset:
var mainFieldset = document.createElement("fieldset");

// Création de legende :
var legend = document.createElement("legend"),
    legendText = document.createTextNode("Uploader une image !");
legend.appendChild(legendText);

// creation de <div style = "text-align : center">...</div>
var div = document.createElement("div");
div.style = "text-align : center";

//Création de label :
var label = document.createElement("label"),
    labelText = document.createTextNode("Image à uploader : ");
label.htmlFor = "inputUpload";
label.appendChild(labelText);

//Création de input type file :
var inputFile = document.createElement("input");
inputFile.type = "file";
inputFile.name = "inputUpload";
inputFile.id = "inputUpload";

//Création de input type submit :
var inputSubmit = document.createElement("input");
inputSubmit.type = "submit";
inputSubmit.value = "Envoyer";

var retour = document.createElement("br");

// MISE EN PLACE DE CONTENU DU div :

div.appendChild(label);
div.appendChild(inputFile);
div.appendChild(retour);
div.appendChild(retour);
div.appendChild(inputSubmit);

// MISE EN PLACE DE CONTENU DU fielfset :
mainFieldset.appendChild(legend);
mainFieldset.appendChild(div);

// MISE EN PLACE DE CONTENU DU form :
mainForm.appendChild(mainFieldset);

// MISE EN PLACE DE CONTENU DU div="divTP4" :
mainDiv.appendChild(mainForm);

document.body.appendChild(mainDiv);