// Q1 Create a switch statement that looks at the value of a number and gives you the book in the Harry Potter series that corresponds with that number. Series order is below
// 1 - The Philosopher's Stone
// 2 - The Chamber of Secrets
// 3 - The Prisoner of Azkaban
// 4 - The Goblet of Fire
// 5 - The Order of the Phoenix
// 6 - The Half-Blood Prince
// 7 - The Deathly Hallows

// Q2 Convert the switch statement above into an if..else if..else statement

// let bookNumber = 2;

// switch (bookNumber) {
//     case 1:
//         console.log("Harry Potter and The Philosopher's Stone");
//         break;
//     case 2:
//         console.log("Harry Potter and The Chamber of Secrets");
//         break;
//     case 3:
//         console.log("Harry Potter and The Prisoner of Azkaban");
//         break;
//     case 4:
//         console.log("Harry Potter and The Goblet of Fire");
//         break;
//     case 4:
//         console.log("Harry Potter and The Order of the Phoenix");
//         break;
//     case 4:
//         console.log("Harry Potter and The Half-Blood Prince");
//         break;
//     case 4:
//         console.log("Harry Potter and The Deathly Hallows");
//         break;
//     default:
//         console.log("geez how many books do you think there are? try again");
//         break;
// }

// if (bookNumber == 1) {
//     console.log("Harry Potter and The Philosopher's Stone");
// } else if (bookNumber == 2) {
//     console.log("Harry Potter and The Chamber of Secrets");
// } else if (bookNumber == 3) {
//     console.log("Harry Potter and The Prisoner of Azkaban");
// } else if (bookNumber == 4) {
//     console.log("Harry Potter and The Goblet of Fire");
// } else if (bookNumber == 5) {
//     console.log("Harry Potter and The Order of the Phoenix");
// } else if (bookNumber == 6) {
//     console.log("Harry Potter and The Half-Blood Prince");
// } else if (bookNumber == 7) {
//     console.log("Harry Potter and The Deathly Hallows");
// } else {
//     console.log("geez how many books do you think there are? try again");
// }



// Q1 Create a switch statement that is passed in the day of the week. For each of the below cases, print out to the console a value

// Saturday - "Ahh, I can finally relax"
// Sunday - "Ah well, the weekend is nearly over"
// Thursday/Friday - "Yay, it's almost the weekend"
// default - "Time for work then..."

// Q2 Convert the above switch statement into an if statement

let day = "Saturday";

switch (day) {
    case "Saturday":
        console.log("Ahh, I can finally relax");
        break;
    case "Sunday":
        console.log("Ah well, the weekend is nearly over");
        break;
    case "Thursday":
    case "Friday":
        console.log("Yay, it's almost the weekend");
        break;
    default:
        console.log("Time for work then...");
        break;
}

if (day == "Saturday") {
    console.log("Ahh, I can finally relax");
} else if (day == "Sunday") {
    console.log("Ah well, the weekend is nearly over");
} else if (day == "Thursday" || day == "Friday") {
    console.log("Yay, it's almost the weekend");
} else {
    console.log("Time for work then...");
}
