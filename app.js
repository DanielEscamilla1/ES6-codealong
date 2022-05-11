// All of the `createGreeting` functions are equivalent. The idea is to do 
// all of these live for the students to demonstrarte that.

// let creaGreeting = function(message, name) {
//     return `${message}, ${name}`;
// }

// console.log(creaGreeting("Welcome", "Daniel"))


// We can safely swap out function expressions with arrow functions most of the time

// let creaGreeting = (message, name) => {
//     return `${message}, ${name}! How are you?`;
// }

// console.log(creaGreeting("Welcome", "Daniel"))

// If the arrow function body contains only one expression, we can omit the curly braces and auto return it

let creaGreeting = (message, name) => `${message}, ${name}! How are you?`;

console.log(creaGreeting("Hello", "Daniel"))

// If an arrow function only has one parameter, we can omit the parens () around the single parameter

let greet = greeting => console.log(greeting);

// We call arrow functions the same way as we call regular functions

let greeting = creaGreeting("Welcome", "Dan");

greet(greeting);



//----------------------------------------

// Depending on the environment `setTimeout` is called in, it may refer to one of two objects
// In the browser, `setTimeout` is a property of the `window` object
// In node, it belongs to a special "Timeout" object

let person = {
    name: "Justin",
    saySomething: function(){
        console.log(`${this.name} is thinking...`);

        setTimeout(() => {
            console.log(`${this.name} says hello`)
        }, 1500);
    }
}

person.saySomething(); // prints "justin" is thinking...
// then prints undefined says hello 1500mms later
// console.log("This is happening now")

// Arrow functions bind the `this` keyword to the object it's created inside of
// i.e. whatever `this` is where it's created





// Avoid using arrow functions for object methods

let dog = {
    name: "Toby",
    sound: "Woof!",
    makesound: function() {
        console.log(this.sound);
    },
    readTag: function(){
        console.log(`The tag reads ${this.name}`);
    }
}

dog.makesound();
dog.readTag();

// In the makeSound and readTag methods, `this` doesn't refer to `dog`
// If this code run in node, `this` refers to `module.exports` (the object containing all the exports in this file)
// If this code was run in the browser, `this` would refer to the window



//-------------------------------------------------

// 1. When using var, our counter exists after a for-loop is done

for (var i = 0; i < 5; i++) {
    console.log(i);
}

console.log("After the loop: " + i);

/// this is a popular white board 



// When using let, our counter is not defined outside of the for-loop block

// let x = 42;

// for (var k = 0; k < 5; k++) {
//     console.log(k);
//     // console.log(x);
// }

// console.log(k);


// ==========================================================================

// 2. When using while loops, any values we create inside exist outside of the while-loop block

var count = 5;

while (count < 10) {
    var trippled = count * 3;
    count++;
};
console.log(trippled)

const person1 = {
    name: "Daniel",
    job: "student"
}

person1.name = "Justin"

// const greetings = () => {
//     console.log("hello")
// }

// const greetings = () => {
//     console.log("Sup")
// }

// greetings();

// ==========================================================================

// 3. When using let, values defined inside of the while-loop block don't exist outside of it



// ==========================================================================

// 4. When writing conditionals, values defined inside the conditional block exist outside of it
if(true) {
    var favoriteColor = "Blue";
};

console.log(favoriteColor)
// console.log(favoriteColor); // Prints `blue`

// When using let, values defined inside of a conditional block don't exist outside
let favoriteFood
if (true) {
    favoriteFood = "Pizza"
}

console.log(favoriteFood)


// This works since favoriteColor is not defined inside of a block
// console.log(favoriteFood);
// Prints `pizza`



//------------------------

//Truthy and falsey
//  it will print true unless the only option is false
// 1.
console.log(true || false);
console.log(true && false);
console.log(0 || false)
console.log(1 && 0)
console.log(false || "Daniel")
// 2.



// 3. Ternary Opperators
 const likesVeg = false;
 const meal = likesVeg ? "They like Veg" : "They dont like Veg";

 console.log(meal)
    // if (likesVeg) {
    //     console.log('They like Veg')
    // }else {
    //     console.log("They don't like Veg")
    // }


const userNew = true;
const disMess = userNew ? "Welcome to the site" : "Welcome back, person"


let winScore = 10 
let userScore = 8
const didWin = userScore >= winScore ? "You won" : "Keep trying"

console.log(didWin)
// 4.

const feelingWell = false;
const goingOut = feelingWell ? "I'm going out tonight" : "I'm staying in tonight"

console.log(goingOut)


//----------------------------------

//Functional Loops
const moviePatrons = [
    { name: "Tom", age: 16 },
    { name: "Ashley", age: 31 },
    { name: "Sarah", age: 18 },
    { name: "Alvin", age: 22 },
    { name: "Cherie", age: 14 },
    { name: "Malcolm", age: 15 }
];


// 1.

// forEach is a functional way of iterating through an array without a for-loop
// moviePatrons.forEach((patron) =>{
//     console.log(`${patron.name} is ${patron.age} years old`)
// })


// 2.

// Filter returns a new array containing only elements whose callback returns a truthy value

// const canWatchRatedR = moviePatrons.filter(function(patron) {
//   return patron.age > 17;
// });

// console.log(canWatchRatedR)

// this will make a whole new array. they both would have.


// 3.

// Map returns a brand new array the same length as the first. Each element is passed into the callback.
// Whatever is returned from the callback at each iteration is what goes into that index of the new array
const cardedMoviePatrons = moviePatrons.map(patron => {
    // if (patron.age >= 17){
    //     // return the patros that can watch rated R movies
    //     patron.canWatchRatedR = true;
    // }else {
    //     // make patrons that cant value of false
    //     patron.canWatchRatedR = false;
    // }
    // return patron
    return {
        movieGoer : patron.name,
        canWatchRatedR: patron.age >= 17
    }
})

console.log(cardedMoviePatrons);

//---------------------------------

//Classes ->


//--------- Constructors to Classes

class Pokemon {
    constructor (name, type){
        this.name = name;
        this.type = type;
        this.isHungry = false;
    }

    sayname () {
        console.log(`${this .name}`);
        console.log(`${this.name} has a type of ${this.type}`);
        this.isHungry = true;
    }

    eat () {
        if(this.isHungry) {
            this.isHungry = false
            console.log(`${this.name} ate its food and is not hungry any more`)
        }else {
            console.log(`${this.name} is not hungry.`)
        }
    }
}

const pikachu = new Pokemon("Pikachu", "Electirc");

Pokemon.prototype.attack = "Thunderbolt";

pikachu.sayname();
pikachu.eat();
pikachu.eat();
console.log(pikachu.attack);