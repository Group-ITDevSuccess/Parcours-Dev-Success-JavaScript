function Vehicule (licensePlate, tankSize){
    this.engineStarted = false; // Notre véhicule a-t-il démarré ?
    this.licencePlate = licensePlate; // La plaque d'immatriculation de notre véhicule
    this.tankSize = tankSize; // Taille de norte réservoir en litres.
}

// Permet de démarrer notre Véhicule.
Vehicule.prototype.start = function (){
    this.engineStarted = true;
};

// Permet d'arrêter notre véhicule.
Vehicule.prototype.stop = function (){
    this.engineStarted = false;
}

function  Car(licensePlate, tankSize, trunkSize){
    /*
    * On apple le constructeur de "vehicule" par le biais de la méthode call()
    * affin qu'il affecte de nouvelles propriétées à "Car"
    */
    Vehicule.call(this, licensePlate, tankSize);
    /*
    * Une fois le constructeur parent appélé, l'initialisation de notre objet peut continuer.
     */
    this.trunkOpened = false; // Notre coffre est-il ouvert ?
    this.trunkSize = trunkSize; // la taille de notre coffre en mètre cubes.
}

/*
    L'objet prototype de "vehicule" doit être copié au sein du prototype de "Car" afin que ce dernier
    bénéficier des mêmes méthodes.
 */
Car.prototype = Object.create(Vehicule.prototype, {
    /*
        Le prototype copié possède une référence vers son constructeur, actuellement défini à "vehicule",
        npus devons changer sa référence pour "car" tous en conservant sa particularité d'être
        une propriété non énumérable.
     */
    constructor: {
        value: Car,
        enumerable: false,
        writable: true,
        configurable: true
    }
});

// Il est bien évidemment possible d'ajouter de nouvelles méthodes
Car.prototype.openTrunk = function (){
    this.trunkOpened = true;
}

Car.prototype.closeTrunk = function (){
    this.trunkOpened = false;
}

var myCar = new Car('AA-555-AA', 70, 2.5);

myCar.openTrunk();
alert(myCar.trunkOpened);

myCar.closeTrunk();
alert(myCar.trunkOpened);

function Truck (licensePlate, tankSize, trailersNumber){
    Vehicule.call(this, licensePlate, tankSize);

    this.trailersNumber = trailersNumber;
    // Le nombre de remorques attachées à notre camion.
}

Truck.prototype = Object.create(Vehicule.prototype, {
    constructor: {
        value: Truck,
        enumerable: false,
        writable: true,
        configurable: true
    }
});

Truck.prototype.addTrailer = function (){
    this.trailersNumber++;
}

Truck.prototype.removeTrailer = function (){
    this.trailersNumber--;
}

var myTruck = new Truck("AB-512-DD", 15, 0);

myTruck.addTrailer();
myTruck.addTrailer();
myTruck.addTrailer();

alert(myTruck.trailersNumber);
