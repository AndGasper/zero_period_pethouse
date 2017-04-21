
//main controller creating pets and governing interactions between pets
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
    this.createCat = function(name, optionsObj){
        var cat = new Cat(name);
        cat.init(optionsObj);
        return cat;
    };
    this.createDog = function(name, optionsObj){
        var dog = new Dog(name);
        dog.init(optionsObj);
        return dog;
    };
    this.createToy = function(optionsObj){
        var toy = new Toy();
        toy.init(optionsObj); //object containing name, type
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