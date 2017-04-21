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


//main controller creating pets and governing interactions between pets
function App(){

}

//controller for cat objects
function Cat(){

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
function LitterBox(){

}