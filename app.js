<<<<<<< HEAD
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

}

//controller for food dish to supply food to other animals
function FoodDish(){

}

//what goes in, must come out
function LitterBox() {
}
Cat.prototype = Object.create(Animal.prototype);
var felix = new Cat();
console.log(felix);
felix.meow("meow");




//*************team cat end********************
