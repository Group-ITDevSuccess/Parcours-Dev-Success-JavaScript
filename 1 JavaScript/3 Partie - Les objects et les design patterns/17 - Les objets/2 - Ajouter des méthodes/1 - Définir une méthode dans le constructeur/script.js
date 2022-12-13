function Person(nom, age, sex, parent, work, friends){
    this.nom = nom;
    this.age = age;
    this.sex = sex;
    this.parent = parent;
    this.work = work;
    this.friends = friends;

    this.addFriend = function (nom, age, sex, parent, work, friends){
        this.friends.push(new Person(nom, age, sex, parent, work, friends));
    };
}