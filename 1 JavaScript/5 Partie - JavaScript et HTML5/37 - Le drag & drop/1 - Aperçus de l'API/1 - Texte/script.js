var draggableElement = document.querySelector('#draggable');

draggableElement.addEventListener('dragstart', function (e) {
    e.dataTransfer.setData('text/plain', 'Deplacable');
});