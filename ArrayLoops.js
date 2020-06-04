let numbers = [12, 10, 57, 84, 24];
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(number);
}

// Q1 - Create an array of strings
let games = ["Destiny", "Smite", "God of War", "League of Legends"]
// Q2 - Loop over the array of strings and log each one to the console
for (let i = 0; i < games.length; i++) {
    const game = games[i];
    console.log(game);
}
// Q3 - Create an array of numbers
let multiples = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Q4 - Loop over the array of numbers and log the number times 2 for each element in the array
for (let i = 0; i < multiples.length; i++) {
    const number = multiples[i];
    console.log(number * 2);
}

//FOR - OF - LOOP
for(let number of numbers) {
    console.log(number);
}



for(let game of games){
    console.log(game)
}

for(number of multiples){
    console.log(number * 2);
}