var parent = document.getElementById('parent'),
    child = document.getElementById('child');

alert("Sans le fonction de calcul, la position de l'élément enfant est : \n\n "+
    'offsetTop : '+child.offsetTop+'px\n'+
    'offsetLeft : '+child.offsetLeft+'px'
);

function getOffset(element){
    var top = 0,
        left = 0;

    do {
        top += element.offsetTop;
        left += element.offsetLeft;
    }while (element = element.offsetParent);

    return{
        top: top,
        left: left
    };
}

alert("Avec la fonction de calcul, la position de l'élément enfant est : \n\n"+
    'offsetTop : '+getOffset(child).top+'px\n'+
    'offsetLeft : '+getOffset(child).left+'px'
);