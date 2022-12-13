var family = {
    self: 'Sebastien',
    sister: 'Laurence',
    brother: 'Ludovic',
    cousin_1: 'Pauline',
    cousin_2: 'Guillaume',
};

// Testons si cette méthode n'existe pas déjà :
if (!Object.prototype.debug){
    // Créons la méthode
    Object.prototype.debug = function (){
     var text = 'Object {\n';
        for(var i in this){
            if(i !== 'debug'){
                text += '['+i+'] => '+this[i]+`\n`;
            }
        }
        alert(text+'}');
    }
}

family.debug();