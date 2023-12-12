/******************************************************************
    CCC - Web Design and Development with Co-op / Javascript for Web
    by Henry Wat - Assignment 2 exercise 5
******************************************************************/

// cStep 1: Create a file named exercise5.js and create a notes array as follow:
const notes = [
    { content: "Keep the browser inspector opened all the time!", type: "web", votes: 150 },
    { content: "Take small steps.", type: "web", votes: 45 },
    { content: "Plan first before writing the code.", type: "web", votes: 43 },
    { content: "Avoid repeat yourself.", type: "web", votes: 66 },
    { content: "use let or const to declare a variable, never use var.", type: "javascript", votes: 57 },
    { content: "use strict equality check ===.", type: "javascript", votes: 75 },
    { content: "use arrow function.", type: "javascript", votes: 95 },
    { content: "Use higher order functions for arrays instead of loops if possible.", type: "javascript", votes: 81 },
];

// Step 2: Create an array named webNotes which contains web notes only.
const webNotes = notes.filter(note => note.type === "web");

// Step 3: Create an array named jsNotes which contains javascript notes only.
const jsNotes = notes.filter(note => note.type === "javascript");

// Step 4: Create an string array named noteContents which contains all elements
//         in notes with the same format as this example and print out the noteContents in console.
//         "Keep the browser inspector opened all the time! (web, votes: 150)"
const noteContents = notes.map(note => console.log(`[${note.type}]: "${note.content}" has ${note.votes} votes`));

// Step 5: Create a variable named mostVotedNote which assign the note object with most number of votes. Print out result in console.
const mostVotedNote = notes.reduce((prev, current) => (prev.votes > current.votes) ? prev : current);
console.log(`The top voted note is "${mostVotedNote.content}"`);