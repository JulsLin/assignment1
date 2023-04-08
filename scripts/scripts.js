// When the "Dark Theme" button is clicked, background colors should change to darker 
//(use 2 different colors for the left and right parts)
//use toggling class properties
const body = document.querySelector('body')
const nav = document.querySelector('nav')
const darkthemeBG = document.querySelector('.theme')

darkthemeBG.addEventListener("click", () => {
    body.classList.toggle("dark-theme");
    nav.classList.toggle("nav-dark-theme");
});

//text on the button should be updated to "Light Theme"
let buttonRef = document.querySelector('.theme')
function changeText () {
    if (buttonRef.textContent === "Dark Theme"){
        buttonRef.textContent = "Light Theme";
    } else {
        buttonRef.textContent = "Dark Theme"
    }
}
buttonRef.addEventListener("click", changeText);

//Clicking "Cancel" button will hide text area, save and cancel button
const save = document.querySelector('.save')
const textArea = document.querySelector('.textarea')
const cancel = document.querySelector('.cancel')

cancel.addEventListener("click", () => {
    textArea.style.display = 'none';
    save.style.display = 'none';
    cancel.style.display = 'none';
});

// Pressing "New Note" button would make them visible again
const newNote = document.querySelector('.notes');
let isTextAreaVisible = false;
newNote.addEventListener("click", () => {
    if (isTextAreaVisible) {
        textArea.value = '';
    } else {
    textArea.style.display = 'block';
    save.style.display = 'inline-block';
    cancel.style.display = 'inline-block';
    }
})

// Declare an array (notesArray)
// Make sure this variable is declared outside of any function
const notesArray = [
    {title: "note one", body: "this is my first note"}
]

// Show a prompt to the user and ask for the title of the note
save.addEventListener("click", () => {
    const title = prompt("Please enter a title for your notes:");
    const body = textArea.value;
    const note = {title, body};
    notesArray.push(note);
})

