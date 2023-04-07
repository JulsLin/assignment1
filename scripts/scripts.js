const body = document.querySelector('body')
const nav = document.querySelector('nav')
const darkthemeBG = document.querySelector('.theme')

darkthemeBG.addEventListener("click", () => {
    body.classList.toggle("dark-theme");
    nav.classList.toggle("nav-dark-theme");
});

let buttonRef = document.querySelector('.theme')
function changeText () {
    if (buttonRef.textContent === "Dark Theme"){
        buttonRef.textContent = "Light Theme";
    } else {
        buttonRef.textContent = "Dark Theme"
    }
}
buttonRef.addEventListener("click", changeText);

const save = document.querySelector('.save')
const textArea = document.querySelector('.textarea')
const cancel = document.querySelector('.cancel')

cancel.addEventListener("click", () => {
    textArea.style.display = 'none';
    save.style.display = 'none';
    cancel.style.display = 'none';
});

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