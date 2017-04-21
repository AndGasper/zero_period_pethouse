
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

}

//what goes in, must come out
function LitterBox(){

}