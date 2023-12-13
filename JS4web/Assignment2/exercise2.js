/******************************************************************
    CCC - Web Design and Development with Co-op / Javascript for Web
    by Henry Wat - Assignment 2 exercise 2
******************************************************************/

// Function: Capitalized the first letter of a string and return the result
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase(); // assume not empty string or null input


// Function: Show the original fruit list, capitalized fruit list,
// and the total number of characters in the fruit list
const showFruites = (array) => {
    console.log(`Original fruit list: ${array.toString()}`);

    // counter for the total number of characters in a fruit
    let totalChar = 0;

    // Capitalize all string elements in fruits using a loop
    // and calculate the total number of characters in the fruit list
    for (let i = 0; i < array.length; i++) {
        // Capitalize all string elements in fruits using a loop,
        array[i] = capitalize(array[i]);
        totalChar += array[i].length;
    }

    // print the capitalized fruit list
    console.log(`Capitalized fruit list: ${array.toString()}`);
    // print the total number of characters in fruit list
    console.log(`There are ${totalChar} characters in the fruit list`);
}

// Create an array fruits with the following element: 
// "apple", "orange", "banana", "mango" (All lowercase letters)
// and call showFruites function
const fruits = ["apple", "orange", "banana", "mango"];
showFruites(fruits);

// how to implement this using for ... of loop and array.foreach()?
fruits.forEach(function (fruit) {
    console.log(fruit);
});
for (let fruit of fruits) {
    console.log(fruit);
    
}

console.log("end of program")