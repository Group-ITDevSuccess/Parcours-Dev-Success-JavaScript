var sentence = "Si ton tonton";

var result = sentence.search(/\bton\b/);

if (~result){
    // On vérifie que quelque chose a été trouvé
    alert('La position est '+result);
}