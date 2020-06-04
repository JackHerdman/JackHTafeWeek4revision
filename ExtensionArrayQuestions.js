//Q1 - Declare an empty array using the new Array syntax
let games = new Array;
console.log(games);

//Q2 - Push 3 string values to the array
games.push("Destiny", "Smite", "God of War");
console.log(games);

//Q3 - Log all the string values in reverse order (last element logged first, etc.)
for (let i = games.length - 1; i >= 0; i--) {
    const element = games[i];
    console.log(element);
}

//Q4 - Create an array of numbers. There should be at least 4 elements in the array
numbers = [1, 2, 3, 4, 5];
console.log(numbers);

//Q5 - Add a new element at the start and end of the array
numbers.unshift(0);
numbers.push(6);
console.log(numbers);

//Q6 - Log all the elements with an even index
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if (number % 2 == 0) {
        console.log(number);
    }
}
//Q7 - Log all the elements that are divisible by 2 (use a for..in loop)
for(number in numbers){
    if (number%2 == 0) {
        console.log(number);
    }
}
//Q8 - Create a new array and fill it with all the elements that are greater than or equal to 10
let bigNumbers = [];
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if(number >= 10){
        bigNumbers.push(number);
    }
}