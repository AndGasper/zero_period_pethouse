
function Animal(name, age, type){
    this.name = name;
    this.age = age;
    this.type = type;
}

Animal.prototype.speak = function (message){
    console.log(message);
};
Animal.prototype.eat = function (food){

};
Animal.prototype.play = function (toy){

};
Animal.prototype.litter = function (){

};
Animal.prototype.sleep = function (){

};

//*************team cat start************



//main controller creating pets and governing interactions between pets

let cats = [{name: 'Cat1', age: '3', type: 'cat'}, {name: 'Kitty', age: '20', type: 'cat'}, {name: 'Dog', age: '5', type: 'cat'}];
let dogs = [{name: 'Fido', age: '3', type: 'dog'}, {name: 'Cat2', age: '20', type: 'dog'}, {name: 'Cat3', age: '5', type: 'dog'}];
let toys = [{name: 'ball', type: 'ball'}, {name: 'rope', type: 'rope'}, {name: 'toy', type: 'toy'}];

function App(name = "Learning Pooz"){

    /**
     * Functions below
     **/
    this.name = name;
    this.init = function () {
        this.createCat(cats[0]);
        this.createDog(dogs[0]);
        this.createToy(toys[0]);
        this.createFoodDish(dishes[0]);
        this.createLitterBox(boxes[0]);
    };
    this.createCat = function(catObj){
        var cat = new Cat(catObj);
        //
        return cat;
    };
    this.createDog = function(dogObj){
        var dog = new Dog(dogObj);
        //
        return dog;
    };
    this.createToy = function(toyObj){
        var toy = new Toy();
        toy.init(toyObj); //object containing name, type
        return toy;
    };
    this.createFoodDish = function(){
        var dish = new FoodDish();
        //
        return dish;
    };
    this.createLitterBox = function(){
        var box = new LitterBox();
        //
        return box;
    };
}
//wee code!
//controller for cat objects
function Cat(){
   this.meow = function(message){
       this.say("meow");
   }
   this.eat = function (type){
   }
}

Dog.prototype = Object.create(Animal.prototype);



//controller for dog objects
function Dog(){
 this.bark = function(message){
     this.speak("Woof!");
 }
 this.tired = function(){
     this.sleep();
 }
};

//controller for toy objects that can be played with by animals
function Toy(){
    this.name = null;
    this.type = null;
    this.condition = null;
    this.destroyed = false;

    this.initialize = function(toyConfig) {
        this.name = toyConfig.name;
        this.type = toyConfig.type;
        this.condition = 2;
    };

    //if played with more than 2 times toy is destroyed
    this.play = function() {
        if(this.condition === 0) {
            this.destroyed = true;
            console.warn("You've destroyed the " + this.name + " toy! No toy for you!!");
        } else {
            this.condition--;
            console.log("YAY! We're playing! Play time!")
        }
    };

}


//controller for food dish to supply food to other animals
function FoodDish(){
    this.dish = {
        quantity: null, //Initially bowl is empty hence null; this.dish.quantity => amount of food in bowl
        foodType: null, // Initially bowl is empty, so foodType is null
    };
    this.addFoodToBowl = function(type, quantity) {
        console.log("type of food", type); // Check to see if type is defined;
        console.log("Amount of food: ", quantity); // Check to see if quantity is defined
        this.dish.foodType = type; // Changes the foodType property of the dish object to the input type (of food)
        this.dish.quantity = quantity; // Changes the quantity property of the dish object to the input quantity
        return this.dish;
    };

    this.serveFood = function(animalObject) {
         // animalObject.type should direct animal to appropriate bowl?
        // animalObject.size allows
    }

}

//what goes in, must come out

Cat.prototype = Object.create(Animal.prototype);
var felix = new Cat();
console.log(felix);
felix.meow("meow");




//*************team cat end********************

}

var testDish = new FoodDish(); // New dish
console.log("testDish.addFoodToBowl('dog food', 5);", testDish.addFoodToBowl('dog food', 5));
console.log(testDish);


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

