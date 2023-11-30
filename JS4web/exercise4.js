// CCC - Web Design and Development with Co-op / Javascript for Web
// by Henry Wat - exercise 4



// 1. Write a function called add7 that takes one number and returns that number + 7.
const add7 = (x) => x + 7;
console.log("2 + 7 = " + add7(2)); // testing

// 2. Write a function called multiply that takes 2 numbers and returns their product.
const multiply = (x, y) => x * y;
console.log("2 * 3 = " + multiply(2, 3)); // testing

// 3. rewrite the folling code into a function called checkOfficeHour which takes hour and isWeekend as 2 parameters.

/**
let hour = 9, isWeekend = true;

if (hour > 10 && hour < 18 && !isWeekend) {
    console.log("The office is opened.")
} else {
    console.log("The office is closed.")
}
*/

const checkOfficeHour = (hour, isWeekend) => {
    if (hour > 10 && hour < 18 && !isWeekend) {
        console.log("The office is opened.")
    } else {
        console.log("The office is closed.")
    }
}

// testing
console.log("Office open at 9 weekday?");
checkOfficeHour(9, true);