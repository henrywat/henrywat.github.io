// CCC - Web Design and Development with Co-op / Javascript for Web
// by Henry Wat - exercise 5

// 1. Write a function called lastLetter that takes a string and returns the very last letter of that string:
// lastLetter("abcd") should return "d"
const lastLetter = (str) => str.slice(-1);
console.log("lastLetter('abcd') = " + lastLetter("abcd")); // testing


// 2. Write a function called capitalize that takes a string and returns that string with only the first letter capitalized.
//    Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.
// capitalize("abcd") should return "Abcd"
// capitalize("ABCD") should return "Abcd"
// capitalize("AbCd") should return "Abcd"
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase(); // assume not empty string or null input
console.log("capitalize('abcd') = " + capitalize("abcd")); // testing
console.log("capitalize('ABCD') = " + capitalize("ABCD")); // testing
console.log("capitalize('AbCd') = " + capitalize("AbCd")); // testing
