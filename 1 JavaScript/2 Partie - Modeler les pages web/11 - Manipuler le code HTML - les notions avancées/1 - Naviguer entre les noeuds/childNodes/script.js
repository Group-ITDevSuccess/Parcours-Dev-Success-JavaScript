var paragraphe = document.getElementById('myP');
var children = paragraphe.childNodes;

for(var i = 0, c = children.length; i < c ; i++){
    if(children[i].nodeType === Node.ELEMENT_NODE){
        // C'est un élément HTML
        alert(children[i].firstChild.data);
    }else {
        // C'est certainement un noeud textuel
        alert(children[i].data);
    }
}