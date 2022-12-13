var classes = document.getElementById("myLink").className;

var classesNew = [];

classes = classes.split(' ');

for(var i = 0, c =  classes.length; i < c; i++){
    if(classes[i]){
        classesNew.push(classes[i]);
    }
}

alert(classesNew);