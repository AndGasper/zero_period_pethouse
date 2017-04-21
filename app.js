
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
function LitterBox(){

}

var testDish = new FoodDish(); // New dish
console.log("testDish.addFoodToBowl('dog food', 5);", testDish.addFoodToBowl('dog food', 5));
console.log(testDish);