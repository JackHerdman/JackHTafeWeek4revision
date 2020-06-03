// let result = true && true;    //true
// let result = true && false;   //false
// let result = false && true;   //false
// let result = false && false;  //false

// let hour = 12;
// let minute = 15;

// if(hour == 12 && minute == 15){
//     console.log("The time is 12:15! Time for your appointment")
// }else{
//     console.log("It is not time for your appointment yet...")
// }

//Restaurant
let openTime = 17;
let closeTime = 23;
let currentTime = 16;
let isMonday = false;

if (currentTime > openTime && currentTime < closeTime && !isMonday) {
    console.log("We are Open")
} else {
    console.log("We are Closed ")
}