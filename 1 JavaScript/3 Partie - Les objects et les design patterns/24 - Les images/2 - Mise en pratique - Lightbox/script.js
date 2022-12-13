var links = document.getElementsByTagName('a'),
    linksLen = links.length;

for (var i = 0; i < linksLen; i++){
    links[i].addEventListener('click', function (e){
        e.preventDefault(); // On bloque la redirection

        /*
            On appele notre fonction pour afficher les images
            currentTarget est utilisé pour ciblé le lien et non l'image
         */
        displayImg(e.currentTarget);
    }, false);
}

function displayImg(link) {
    var img = new Image(),
        overlay = document.getElementById('overlay');

    img.addEventListener('load', function (){
        overlay.innerHTML = '';
        overlay.appendChild(img);
    });

    img.src = link.href;
    overlay.style.display = 'block';
    overlay.innerHTML = '<span>Chargement en cours ...</span>';
}

document.getElementById('overlay').addEventListener('click', function (e){
    // currentTarget est utilisz pour ciblré l'overlay et non l'image
    e.currentTarget .style.display = 'none';
});