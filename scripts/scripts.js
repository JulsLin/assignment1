const body = document.querySelector('body')
const nav = document.querySelector('nav')
const darkthemeBG = document.querySelector('.theme')

darkthemeBG.addEventListener("click", () => {
    body.classList.toggle("dark-theme");
    nav.classList.toggle("nav-dark-theme");

});

