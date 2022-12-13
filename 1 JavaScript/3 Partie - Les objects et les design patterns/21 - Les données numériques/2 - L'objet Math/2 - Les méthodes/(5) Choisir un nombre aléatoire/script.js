//alert(Math.random()); // Seulement compris entre 0 (inclus) et 1 (exclu)

function rand(min, max, integer){
    if (!integer){
        return Math.random() * (max - min) + min;
    }else{
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}
alert(rand(10, 100));