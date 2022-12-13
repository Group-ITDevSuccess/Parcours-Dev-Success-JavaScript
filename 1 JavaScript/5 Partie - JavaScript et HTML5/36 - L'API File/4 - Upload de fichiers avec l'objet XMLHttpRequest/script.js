var fileInput = document.querySelector("#file"),
    progress = document.querySelector('#progress');

fileInput.addEventListener('change', function () {
   var xhr = new XMLHttpRequest();

   xhr.open('POST', 'upload.html');
   // Rappelons qu'il est obligatoire d'utiliser le méthode POST quand on souhaite utiliser une FromData

    xhr.upload.addEventListener('progress', function (e) {
        progress.value = e.loaded; // Nombre d'octets uploadés
        progress.max = e.total; // Total d'octéts a uploader
    });

    xhr.addEventListener('load', function () {
        alert('Upload terminé')
    });

    //Upload du fichier...

    var form = new FormData();

    form.append('file', fileInput.files[0]);

    xhr.send(form);



});