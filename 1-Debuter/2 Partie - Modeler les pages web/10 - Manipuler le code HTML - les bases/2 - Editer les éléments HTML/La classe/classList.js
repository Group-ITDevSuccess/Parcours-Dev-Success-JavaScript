var div = document.getElementById('div');

// Ajoute un nouvelle classe
div.classList.add('new-class');

// Retire un classe
div.classList.remove('new-class');

// Retire un classe si elle est présente ou bien l'ajouter si elle est abscente
div.classList.toggle('toggled-class');

// Indique si un classe est presente ou non
if (div.classList.contains('old-class')){
    alert('La classe .old-class est présente !')
}

// Parcourt et affiche les classes CSS
var result = '';

for(var i = 0 ; i < div.classList.length; i++){
    result += '.' + div.classList[i] + '\n';
}

alert(result);