var sentence = "Dans 22 jours, j'aurai 24 ans";

var result = sentence.replace(/(\d+)/g, function (str, p1){
   p1 = parseInt(p1);

   if (!isNaN(p1)){
       return num2Letters(p1);
   }
});

alert(result);