// Creation de conteneur <div id = "divTP4>...</div> :
var mainDiv = document.createElement("div");
mainDiv.id = "divTP4";

// Création de la struture du formulaire :
var form = document.createElement('form'),
    fieldset = document.createElement('fieldset'),
    legend = document.createElement('legend'),
    legendText = document.createTextNode("Uploader une image : "),
    center = document.createElement('div');

form.action = 'upload.html';
form.enctype = 'multipart/form-data';
form.method = 'post';

center.setAttribute('style', 'text-align: center');

legend.appendChild(legendText);

fieldset.appendChild(legend);
fieldset.appendChild(center);

form.appendChild(fieldset);

// Création des champs :
var label = document.createElement('label'),
    labelText = document.createTextNode("Image à uploader : "),
    input = document.createElement('input'),
    br = document.createElement('br'),
    submit = document.createElement('input');

input.type = 'file';
input.id = "inputUpload";
input.name = input.id;

submit.type = 'submit';
submit.value = "Envoyer";

label.htmlFor = "inputUpload";
label.appendChild(labelText);

center.appendChild(label);
center.appendChild(input);
center.appendChild(br);
center.appendChild(br.cloneNode(false)); // On clone, pour mettre une deuxième br

center.appendChild(submit);

// On insère le formulaire dans mainDiv
mainDiv.appendChild(form);

document.body.appendChild(mainDiv);