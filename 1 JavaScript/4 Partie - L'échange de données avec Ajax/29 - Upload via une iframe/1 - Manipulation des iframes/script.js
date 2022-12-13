// Accéder au contenu
var frame = document.getElementById('myFrame').contentDocument,
    frame_links = frame.getElementsByTagName('a').length;

console.log(`Il y a ${frame_links} lien dans le frame !`); //Result inhatendue