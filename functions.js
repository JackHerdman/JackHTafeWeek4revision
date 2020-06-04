function multiply(num1, num2) {
    return num1 * num2;
}
let result = multiply(12, 8);
console.log(result);


// Q1 Create a function that takes in a name and writes "Hello" and then the person's name to the console.
function printHello(name) {
    console.log(`Hello ${name}`);
}
// Q2 Create a function that takes in a name and returns a string with the value "Hello" and then the person's name
function returnHello(name) {
    return `Hello ${name}`;
}
// Q3 Create a function that takes in 2 numbers and logs the largest of those numbers to the console
function largestNumber(num1, num2) {
    if (num1 > num2) {
        console.log(`The largest number is ${num1}`)
    } else {
        console.log(`The largest number is ${num2}`)
    }
}
// Q4 Create a function that takes in 2 numbers and returns the smallest of those numbers
function smallestNumber(num1, num2) {
    if (num1 < num2) {
        return num1;
    } else {
        return num2;
    }
}

// Q1 Update so that the name defaults to your name
function UpdatedPrintHello(name = "Jack") {
    console.log(`Hello ${name}`);
}
// Q2 Update so that the name defaults to Luke
function UpdatedReturnHello(name = "Luke") {
    return `Hello ${name}`;
}
// Q3 Update so that the second parameter defaults to 100
function largestNumber(num1, num2 = 100) {
    if (num1 > num2) {
        console.log(`The largest number is ${num1}`)
    } else {
        console.log(`The largest number is ${num2}`)
    }
}
// Q4 Update so that both parameters default to 5
function smallestNumber(num1 = 5, num2 = 5) {
    if (num1 < num2) {
        return num1;
    } else {
        return num2;
    }
}

result = smallestNumber();
console.log(result);