// let i = 0
// while (i < 4) {
//     console.log(i);
//     i++;
// }
//Q1 - Write numbers 3 - 8
let a = 3
while (a <= 8) {
    console.log(a);
    a++;
}
//Q2 - Write even numbers 14 - 20
let b = 14;
while (b <= 20) {
    console.log(b);
    b += 2;
}
//Q3 - Write numbers 7 to 12 reverse
let c = 12;
while (c>=7){
    console.log(c);
    c--;
}
//Q4 - Write numbers 33-45 in reverse that are divisible by 3
let d = 45;
while (d >= 33){
    if (d%3 == 0){
        console.log(d);
    }
    d--;
}


//Do While Loop
//will run once before checking true condition
let e = 0
do {
    console.log(e)
    e++;
} while (false)