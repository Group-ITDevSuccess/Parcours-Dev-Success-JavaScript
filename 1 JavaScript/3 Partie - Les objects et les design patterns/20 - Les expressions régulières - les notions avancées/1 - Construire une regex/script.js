/*
    /^ [a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/
*/

var email = prompt("Entrer votre adresse e-mail : ", "javascript@eyrolles.com");

if(/^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/.test(email)){
    alert(`Adresse e-mail "${email}" validé !`);
}else {
    alert("Adresse e-mail invalide !");
}

