let names = ["Luke", "Charlotte", "Clayton", "Samantha"];
console.log(names[2]); //Outputs Clayton 0, 1, 2
names.push("Riley") //adds to end of array
names.pop () // removes last element
names.unshift("Jasper") // adds element to front of array
names.shift() //removes element at front of array

// Q1 - Create an array of numbers. There should be at least 5 elements
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
// Q2 - Add a number to the end of the number array
numbers.push(6);
console.log(numbers);
// Q3 - Add a number to the front of the number array
numbers.unshift(0);
console.log(numbers);
// Q4 - Change the value of the last element in the array to another number
numbers[6] = 8;
console.log(numbers);
// Q5 - Remove the last element of the array
numbers.pop();
console.log(numbers);
// Q6 - Remove the first 2 elements of the array
numbers.shift();
numbers.shift();
console.log(numbers);
// Q7 - Create an array of strings.
let strings = ["violin", "viola", "double bass"];
console.log(strings);
// Q8 - Update the second element in the array to be a new string.
strings[1] = "cello";
console.log(strings);