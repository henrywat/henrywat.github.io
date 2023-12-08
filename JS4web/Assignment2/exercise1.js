/******************************************************************
    CCC - Web Design and Development with Co-op / Javascript for Web
    by Henry Wat - Assignment 2 exercise 1
******************************************************************/

// Function showUsersInfo(array)
// takes an array of users and prints out the user list and the total number of users
const showUsersInfo = (array) => {
    console.log(`User list: ${array.toString()}`)
    console.log(`There are ${array.length} users on the list`)
}

// Create an array named users "John", "William", "David", "Jenny", "Hannah"
const users = ["John", "William", "David", "Jenny", "Hannah"]

// Print out "User list: John,William..."
// console.log(`User list: ${users.toString()}`) // replaced by function showUsersInfo(users)
// Print out "There are [total number of users] users on the list."
// console.log(`There are ${users.length} users on the list`) // replaced by function showUsersInfo(users)

showUsersInfo(users)

// Swap the position of "John" and "Hannah" and print the result
// swap the first and last element
let temp = users[0]
users[0] = users[users.length - 1]
users[users.length - 1] = temp
//console.log(`User list: ${users.toString()}`)
//console.log(`There are ${users.length} users on the list`)
showUsersInfo(users)

// Add a new user "Finn" to the end of the list and print the result
users.push("Finn")
//console.log(`User list: ${users.toString()}`)
//console.log(`There are ${users.length} users on the list`)
showUsersInfo(users)