var divs = document.getElementsByTagName('div'),
    divsLen = divs.length;

for (var i = 0; i < divsLen; i++){

    (function (i){
        //var currentI = i;
        setTimeout(function (){
            divs[i].style.display = 'block';
            divs[i].style.color = `#9${i}9`;
        }, 200*i);
    })(i);

}