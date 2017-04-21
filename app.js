//*************team cat start************


function Animal(){
    this.age = null;
    this.name = null;
}
Animal.prototype.say = function(message){
    console.log(message);
}

//main controller creating pets and governing interactions between pets
function App(){

}

//controller for cat objects
function Cat(){
   this.meow = function(message){
       this.say("meow");
   }
   this.eat = function (type){
   }
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
function LitterBox() {
}
Cat.prototype = Object.create(Animal.prototype);
var felix = new Cat();
console.log(felix);
felix.meow("meow");


//*************team cat end********************