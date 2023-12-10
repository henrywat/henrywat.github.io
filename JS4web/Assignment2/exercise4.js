/******************************************************************
    CCC - Web Design and Development with Co-op / Javascript for Web
    by Henry Wat - Assignment 2 exercise 4
******************************************************************/

// coding from exercise3.js
let container = document.querySelector(".js-notes-container");
const JS_NOTES_TITLE = "JavaScript Notes";

let js_notes_title_ul = document.createElement("ul");
js_notes_title_ul.textContent = JS_NOTES_TITLE;
js_notes_title_ul.style.color = "red";

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
// end of coding from exercise3.js


// start of exercise 4
// When user click the button, we create a note element which takes text from the input value and append to the note list.
//let input = document.querySelector("input");
let input = document.getElementById("note"); // select the element by id
let button = document.querySelector("button"); // select the element by css tag

button.addEventListener("click", () => {
    const inputText = input.value;

    if (inputText) {
        let js_note_li = document.createElement("li");
        //js_note_li.innerHTML = inputText; // including markup
        //js_note_li.innerText = inputText;
        js_note_li.textContent = inputText; // plain text
        js_note_li.style.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
        js_notes_title_ul.appendChild(js_note_li);
        console.log("new note added: "+inputText);
    }
    input.value = "";
    input.focus();
})

console.log("end of exercise 4")
// end of exercise 4