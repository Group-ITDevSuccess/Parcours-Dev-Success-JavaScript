var container = document.querySelector('#container');

for (var i = 0, element; i < 10; i++){
    element =  document.createElement('li');
    container.appendChild(element);
    element.innerHTML = i + 1;
}