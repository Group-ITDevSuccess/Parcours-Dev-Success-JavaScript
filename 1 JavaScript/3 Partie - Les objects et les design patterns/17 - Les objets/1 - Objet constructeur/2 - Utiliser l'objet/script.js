 // Definition de l'objet Person via un constructeur
function Person (nom, age, sex, parent, work, friends){
    this.nom = nom;
    this.age = age;
    this.sex = sex;
    this.parent = parent;
    this.work = work;
    this.friends = friends;
}

// On crée des variables qui vont contenir une instance de l'objet Person:

 var seb = new Person('Sébastien', 23, 'm', 'aîné', 'JavaScripteur', []);
 var lau = new Person('Laurence', 19, 'f', 'soeur', 'Sous-officier', []);

 alert(seb.nom);
 alert(lau.nom);