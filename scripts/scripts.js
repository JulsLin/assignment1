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