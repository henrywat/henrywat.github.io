// CCC - Web Design and Development with Co-op / Javascript for Web
// by Henry Wat - exercise 2

// 1. Print out the value "Hello World" in the console
console.log("Hello World");

// 2 Declare a constant variable MAX with the value 57
const MAX = 57;

// 3. Set another variable actual to MAX - 13
let actual = MAX - 13;

// 4. Set another variable percentage to actual / by MAX
let percentage = actual / MAX;

// 5. Print out the statement that should be exactly: "The percentage is 0.77"
percentage = percentage.toFixed(2);
let message = "The percentage is " + percentage;
console.log(message);