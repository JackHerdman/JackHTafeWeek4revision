//TWO DIMENSIONAL ARRAY    aka Nested Array
let naughtsAndCrosses = [
    [" ", " ", " "],
    [" ", "X", " "],
    [" ", " ", " "],
];

for(let row of naughtsAndCrosses) {
    console.log(`${row[0]} | ${row[1]} | ${row[2]}`)
}
console.log(naughtsAndCrosses[1][1]);