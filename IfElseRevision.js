// 1 Write an if statement that evaluates a boolean condition.
// let lie = false;
// if (lie) {
//     console.log("that is false");
// } else {
//     console.log("that is true")
// }
// 2 Write an if statement that evaluates a number as a condition.
// let age = 29;
// if (age < 20) {
//     console.log("you are a teenager")
// } else {
//     console.log("you are not that young")
// }

// 3 Write an if statement that evaluates a negative number as a condition.
// let degrees = -30
// if (degrees < 0) {
//     console.log("you are frozen")
// } else {
//     console.log("you are fine")
// }

// 4 Write an if statement that evaluates a string.
// Try out the following values for the string: 
// 0, false, NaN, undefined
// let string = "undefined";
// if (string) {
//     console.log("this value is true")
// } else {
//     console.log("this value is false")
// }

//"0" = true
//"false" = true
//"NaN" = true
//"undefined" = true

// let number = 15;
// if (number > 10) {
//     console.log("number is bigger than 10");
// } else if (number < 10) {
//     console.log("number is smaller than 10");
// } else {
//     console.log("number is equal to 10");
// }

// create a variable called food and assign it to the name of a food you like
// check if the food is pizza, if it is then log "I Like Pizza", then check
// if the food is pasta, if it is then log "I Like Pasta". If the value is not
// pizza or pasta then log "I wish I had Italian food"
// After you are done, try this again for a cuisine you like instead of Italian

// let food = "pizza";

// if (food == "pizza") {
//     console.log("I like pizza");
// } else if (food == "spaghetti") {
//     console.log("I like spaghetti");
// } else if (food == "gelato") {
//     console.log("I like gelato");
// } else if (food == "pasta") {
//     console.log("I like pasta");
// } else {
//     console.log("I want italian food")
// }

// let myFood = "donburi";
// if (food == "ramen") {
//     console.log("Mmmmmm raaaaammmmeenn");
// } else if (food == "sushi") {
//     console.log("no avo or fish in my sushi thanks");
// } else if (food == "tofu") {
//     console.log("Agedashi Tofu was sent from the gods it's so delicious");
// } else if (food == "donburi") {
//     console.log("Katsu Don... fried chicken and egg. what could be a better combo?");
// } else {
//     console.log("damn i want japanese food");
// }

// let age = 18;
// let faveDrink = "Wine";

// if (faveDrink == "Wine") {
//     if (age < 18) {
//         console.log("You cant drink that!");
//     } else {
//         console.log("I like wine too")
//     }
// } else if (favDrink == "Red Bull") {
//     if (age < 16) {
//         console.log("You shouldn't be having those");
//     } else {
//         console.log("wow thats too sweet for me!")
//     }
// } else {
//     console.log("that sounds like a nice drink")
// }

//Write a decision tree that checks the colour and price of a car
//If the price is over $50,000 and the colour is red then log 'I like red cars'
//If the price is over $50,000 and the colour is not red then log 'thats too expensive'
//If the price is under $50,000 but over $10,000 and the colour is blue then log "i like blue cars too"
//If the price is under $50,000 but over $10,000 and the colour is red then log "i like red cars and this one's a bargain"
//if the price is under $10,000 then log "wow what a bargain"

// carPrice = 50000;
// carColour = "Pink";

// if (carPrice >= 50000) {
//     if (carColour == "Red") {
//         console.log("I like red cars");
//     } else {
//         console.log("That's too expensive");
//     }
// } else if (carPrice >= 10000) {
//     if (carColour == "Blue") {
//         console.log("I like blue cars too")
//     } else if (carColour == "Red") {
//         console.log("I like red cars and this one is a bargain")
//     } else {
//         console.log("that car is eehhh...")
//     }
// } else {
//     console.log("Wow, what a bargain!!")
// }


//Best Song Ever

let genre = "Rock";
let period = "1990s";

if (genre == "Rock") {
    if (period == "1990s") {
        console.log("Smells Like Teen Spirit - Nirvana, is the best rock song of the 90s");
    } else if (period == "2000s") {
        console.log("How You Remind Me - Nickleback, is the best rock song of the 00s");
    } else if (period == "2010s") {
        console.log("Believer - Imagine Dragons, is the best rock song of the 2010s");
    } else {
        console.log("Stairway to Heaven - Led Zepplin, is the best rock song of all time");
    }
} else if (genre == "Pop") {
    if (period == "1990s") {
        console.log("I Will Always Love You - Whitney Houston, is the best pop song of the 90s");
    } else if (period == "2000s") {
        console.log("We Belong Together - Mariah Carey, is the best pop song of the 00s");
    } else if (period == "2010s") {
        console.log("Uptown Funk - Mark Ronson, is the best pop song of the 2010s");
    } else {
        console.log("When Doves Cry - Prince, is the greatest pop song of all time");
    }
} else if (genre == "Dance") {
    if (period == "1990s") {
        console.log("Blue - Eiffel 65, is the best dance song of the 90s");
    } else if (period == "2000s") {
        console.log("One More Time - Daft Punk, is the best dance song of the 00s");
    } else if (period == "2010s") {
        console.log("Levels - Avicii is the best dance song of the 2010s");
    } else {
        console.log("Sandstorm - Darude is the best dance song of all time");
    }
} else {
    console.log("Bohemian Rhapsody by Queen is the greatest song of all time");
}