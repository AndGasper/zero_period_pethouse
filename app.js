
//main controller creating pets and governing interactions between pets
function App(){

}

//controller for cat objects
function Cat(){

}

//controller for dog objects
function Dog(){

}

//controller for toy objects that can be played with by animals
function Toy(){

}

//controller for food dish to supply food to other animals
function FoodDish(){

}

//what goes in, must come out
function LitterBox(animal){
    this.poopCounter = 0;
    this.catPoop = 0;
    this.dogPoop = 0;

    this.poopCounter = catPoop + (dogPoop * 2);


    this.hasPoop = false;
    this.checkPoopLevel = function() {
        if (this.poopCounter >= 5) {
            console.error('Litter Box is Full! Clean it out');
        } else if (this.poopCounter > 2) {
            console.warn('Your litterbox is half-full');
        } else
        needToBeCleaned(this.poopCounter);
    };

    this.animalPoops = function(animal){
        var poop = animal.poop();
        if ()

        this.hasPoop = true;
    };

    function dumpLitterBox() {

    }
}
//
// var box = new LitterBox();
// box.receivePoop(fido);

var box = new LitterBox();

var fido = new Dog();

box.receivePoop(fido.depositPoop())