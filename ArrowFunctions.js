//Step 1. Convert the function into a function expression
function addTwo(num){
    return num + 2;
}
const addTwo = function (num) {
    return num + 2;
}

//Step 2. Remove the function keyword and add the arrow
//between the parameters and the function body
const addTwo = (num) => {
    return num + 2;
}

//Step 3 (Optional). If there is only 1 parameter, you can remove the brackets
const addTwo = num => {
    return num + 2;
}

//Step 4 (Optional). If there is only 1 line,
//Remove the curly brackets and the return keyword.
const addTwo = num => num + 2;


//QUESTIONS
//Convert the previous 4 functions to arrow functions

const printHello = name => console.log(`Hello ${name}`);

const returnHello = name =>`Hello ${name}`;

const largestNumber = (num1, num2) => console.log((num1 > num2) ? num1 : num2)
 
const smallestNumber = (num1, num2) => (num1 < num2) ? num1 : num2;
