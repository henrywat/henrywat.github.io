/******************************************************************
    CCC - Web Design and Development with Co-op / Javascript for Web
    by Henry Wat - Assignment 2 exercise 3
******************************************************************/

// Follow the instruction in lecuture-3-4.pdf and create a similar dynamic note list for JavaScript notes
let container = document.querySelector(".js-notes-container");
const JS_NOTES_TITLE = "JavaScript Notes";

let js_notes_title_ul = document.createElement("ul");
js_notes_title_ul.textContent = JS_NOTES_TITLE;
js_notes_title_ul.style.color = "red";

/* traditional way
const JS_NOTES = [
    "use let or const to declare a variable, never use var.",
    "use strict equality check ===.",
    "use arrow function."
];

for (let note of JS_NOTES) {
    let js_note_li = document.createElement("li");
    js_note_li.textContent = note;
    js_note_li.style.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    js_notes_title_ul.appendChild(js_note_li);
}
*/

/*
// That looks great! I’m not sure how you implement this.
// If you haven’t try object, feel free to change JS_NOTE to object and store the color values as properties.
// You can know learn this from MDN web docs~
*/

const JS_NOTES = [
    { note: "use let or const to declare a variable, never use var.", color: "#" + Math.floor(Math.random() * 16777215).toString(16) },
    { note: "use strict equality check ===.", color: "#" + Math.floor(Math.random() * 16777215).toString(16) },
    { note: "use arrow function.", color: "#" + Math.floor(Math.random() * 16777215).toString(16) }
];

for (let noteObj of JS_NOTES) {
    let js_note_li = document.createElement("li");
    js_note_li.textContent = noteObj.note;
    js_note_li.style.color = noteObj.color;
    js_notes_title_ul.appendChild(js_note_li);
}

container.appendChild(js_notes_title_ul);

console.log("end of program")