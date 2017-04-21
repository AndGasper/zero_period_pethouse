
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
function LitterBox(){

}