var div = document.getElementById('myDiv');
var txt = '';

if(div.textContent){
    /*
        "textContent" existe ? Alors on s'en sert !0
     */
    txt = div.textContent;
}else if(div.innerText){
    /*
        "innerText" existe ? Alors on doit être sous IE.
     */
    txt = div.innerText + ' [via Internet Explorer]';
}else{
    /*
        Si auccun des deux n'existe, cela est sûrement dû au fait qu'il n'y pas de texte.
     */
    txt = ''; // On met une chaîne de caractères vide.
}

alert(txt);

// OU

txt = div.textContent || div.innerText || '';

alert(txt);