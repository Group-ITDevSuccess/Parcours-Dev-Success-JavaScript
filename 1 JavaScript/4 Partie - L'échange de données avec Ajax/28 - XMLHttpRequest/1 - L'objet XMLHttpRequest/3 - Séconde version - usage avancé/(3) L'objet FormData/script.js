var xhr = new XMLHttpRequest();

xhr.open('POST', 'script.php');

var myForm = document.getElementById('myForm'),
    form = new FormData(myForm);

xhr.send(form);