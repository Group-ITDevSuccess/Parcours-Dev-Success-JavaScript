function Img(src) { // On ajoute un paramètre "src"
    var obj = this; // Nous faison une pétite référence vers notre objet
                    // Img. Cela nous facilitera la tâche.

    this.originalImg = new Image(); // On instancie l'objet original, le wrapper servira alors d'intermédiaire

    this.complete = false;
    this.onload = function (){}; // Voici l'événement que les développeurs pourront modifier

    this.originalImg.onload = function (){
        obj.complete = true; // L'image est chargée !
        obj.onload(); // On exécute l'événement éventuellement spécifié par le développeur
    };

    if (src){
        this.originalImg.src = src; // Si elle est spécifiée, on définit alors le propriété src
    }
}

Img.prototype.set = function (name, value){
    var allowed = ['width', 'height', 'src'],
    // On spécifie les propriétés donton autorise la modification
        wrapperProperties = ['complete', 'onload'];

    if (allowed.indexOf(name) != -1){
        this.originalImg[name] = value;
        //Si la propiété est autorisée alors on la modifie
    }else if (wrapperProperties.indexOf(name) != -1){
        this[name] = value; // Ici, la propriété appartient au wrapper et non pas à l'pbjet original
    }
};

Img.prototype.get = function (name){
    /*return this.originalImg[name];
      //Pas besoin de contrôle tant qu'il ne s'agit pas d'une modification
    */
    return typeof this[name] != 'undefined' ? this[name] : this.originalImg[name];
};
/*
    ESSAI :
 */

var myImg = new Img(); // on crée notre objet Img

alert(`complete ${myImg.get('complete')}`);
// Verification de la proriété complete :elle est bien à false

myImg.set('onload', function (){
    // Affiche de diverse information une fois l'image chargée

    alert(`
        complete : ${this.get('complete')}\n
        width : ${this.get('width')} px\n
        height : ${this.get('height')} px
    `);
});

myImg.set('src', 'IMG/logo.jpg');
// On spécifie l'adresse de l'image