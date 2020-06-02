let age = 15
let canDrink;
if (age >= 18) {
    canDrink = "Yes";
} else {
    canDrink = "No"
}

// Conditional Operator '?'
let myAge = 23
let myCanDrink = (age>= 18) ? "Yes" : "No";

//1. Set the value of a car based on its color. If it is red then it is worth $50,000, otherwise it is worth $10,000.
let carColour = "blue"
let carValue = (carColour == "red") ? 50000 : 10000;
console.log(carValue)

//2. Set the value of a message based on someone's name. If they have your name set the message to be "Hello Me" Otherwise set the message to be "hello " + name

let name = "Bob"
let message = (name == "Jack") ? "Hello Me" : "Hello " + name;
console.log(message)
