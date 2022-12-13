/*
var birth = 'Je suis né en mars';

/^Je suis né en (\S+)$/.exec(birth);

alert(RegExp.$1);

 */
var email = prompt("Entrer une adresse e-mail", "javascript@gmail.com");

if(/^([a-z0-9._-]+)@([a-z0-9._-]+)\.([a-z]{2,6})$/.test(email)){
    alert(`Partie local : ${RegExp.$1} \nDomaine : ${RegExp.$2} \nExtension : ${RegExp.$3}`)
}else{
    alert("Adresse e-mail invalide !");
}