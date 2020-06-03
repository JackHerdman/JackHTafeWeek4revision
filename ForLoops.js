//For Loops
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     //insert code here
// }
//for (begin, condition, step){
//body
//}
//begin - start off here
//condition - check this is true and then continue
//body - execute code here
//step - run at the end of the code before checking condition again

// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

//Q1 Write a for loop that logs all the numbers between 2 and 6 (inclusive)
// console.log("Question 1");
// for (let i = 2; i <= 6; i++) {
//     console.log(i);
// }

//Q2 Write a for loop that logs all the odd numbers between 10 and 20
// console.log("Question 2");
// for (let i = 11; i < 20; i += 2) {
//     console.log(i);
// }

//Q3 Write a for loop that logs all the numbers between negative 4 and positive 3 in reverse order (start at 3 go to negative 4) (inclusive)
// console.log("Question 3");
// for (let i = 3; i >= -4; i--) {
//     console.log(i);
// }

//Q4 Write a for loop that logs all the numbers that are multiples of 5 between 30 and 75
// console.log("Question 4");
// for (let i = 30; i <= 75; i += 5) {
//     console.log(i);
// }

// Q5 Write a for loop that logs all the even numbers between 10 and 16 (inclusive). You must use a continue statement
console.log("Question 5");
for (let i = 10; i <= 16; i++) {
    if (i % 2 != 0) {
        continue
    }
    console.log(i)
}

// Q6 Write a for loop that logs all the odd numbers between 33 and 45 (inclusive) in reverse order. You must use a continue statement.
console.log("Question 6");
for (let i = 45; i >= 33; i--) {
    if (i % 2 == 0) {
        continue;
    }
    console.log(i)
}

// Q7 Write a for loop that logs all the numbers from 50 to 100 that when divided by 10 have a remainder of 5. You must use a continue statement.
console.log("Question 7");
for (let i = 50; i <= 100; i++) {
    if (i % 10 == 5) {
        console.log(i);
    }
    continue;
}

// Q8 Do all of the above loops using a while loop.
console.log("Question 5 - While Loop");
let a = 10;
while (a <= 16) {
    if (a % 2 != 0) {
        a++
        continue;
    }
    console.log(a)
    a++
}

console.log("Question 6 - While Loop")
let b = 45
while (b >= 33) {
    if (b % 2 == 0) {
        b--;
        continue
    }
    console.log(b);
    b--;
}

console.log("Question 7 - While Loop");
let c = 50
while (c <= 100) {
    if (c % 10 != 5) {
        c++;
        continue;
    }
    console.log(c);
    c++;
}