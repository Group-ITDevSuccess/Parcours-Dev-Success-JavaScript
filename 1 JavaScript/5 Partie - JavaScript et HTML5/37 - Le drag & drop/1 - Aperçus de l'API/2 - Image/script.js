var dragImg = new Image(); // Il est conseillé de précharger l'image, sinon elle
                            // risque de ne pas s'afficher pendant le déplacement

dragImg.src ='React.jpg';

document.querySelector('*[draggale="true"]').addEventListener('dradstart', function (e) {
    e.dataTransfer.setDragImage(dragImg, 40, 40);
    // Une position de 40x40 pixels centrera l'image dde 80x80 pixel sous le curseur
});