var sentence = "Si ton tonton tond ton tonton, ton tonton tondu sera tondu";

var result = sentence.match(/\bton\b/g);

if (~result){
    // On vérifie que quelque chose a été trouvé
    alert(`Il y a ${result.length} de "tonton : \n\n ${result}"`);
}