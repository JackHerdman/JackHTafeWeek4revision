// let result1 = true || true;     //result1 = true
// let result2 = true || false;    //result2 = true
// let result3 = false || true;    //result3 = true
// let result4 = false || false;   //result4 = false

// let isInClass = false;
// let isAtWork = false;
// let isParent = true;

// if (isInClass || isAtWork || isParent){
//     console.log("Sorry I'm busy");
// }else {
//     console.log("I'm freee!!")
// }


// let age = 16
// let isTeaching = true;
// let isDriving = false;

// if(age < 18 || isDriving || isTeaching){
//     console.log("Soft drink for you buddy.")
// } else {
//     console.log("The bar is your oyster.")
// }

//Restaurant
// let openTime = 17;
// let closeTime = 23;
// let currentTime = 19;
// let isMonday = true;

// if (currentTime < openTime || currentTime > closeTime || isMonday) {
//     console.log("We are Closed")
// } else {
//     console.log("We are Open")
// }

let userFavouriteGame;
let myFavouriteGame = "Destiny";

let bestGame =  userFavouriteGame || myFavouriteGame;
console.log(bestGame);