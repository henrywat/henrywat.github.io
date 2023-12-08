/******************************************************************
    CCC - Web Design and Development with Co-op / Javascript for Web
    by Henry Wat - Assignment 2 exercise 4
******************************************************************/

// When user click the button, we create a note element which takes text from the input value and append to the note list.

//let input = document.querySelector("input");
let input = document.getElementById("note"); // select the element by id
let button = document.querySelector("button"); // select the element by css tag

button.addEventListener("click", () => {
    const inputText = input.value;

    if (inputText) {
        let js_note_li = document.createElement("li");
        //js_note_li.innerHTML = inputText; // including markup
        js_note_li.textContent = inputText; // plain text
        //js_note_li.innerText = inputText;
        js_note_li.style.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
        js_notes_title_ul.appendChild(js_note_li);
    }
    input.value = "";
    input.focus();
})
