

// ANIMACION

let section = document.querySelector(".animacion");
let text = document.querySelector(".text")
let innerText = document.querySelector(".innerText")

 window.addEventListener("scroll", function(){

    let value = window.scrollY;
    section.style.clipPath = `circle(${value}px at center center)`;
    text.style.left = 100 - value / 5 + "%"
    innerText.style.left = 100 - value / 5 + "%"
});

 // menu responsive 
document.querySelector(".bars__efect").addEventListener("click", activeMenu)
const menuDesplegable = document.querySelector(".container__opciones")

const line1__bars = document.querySelector(".line1__bars-menu")
const line2__bars = document.querySelector(".line2__bars-menu")
const line3__bars = document.querySelector(".line3__bars-menu")

function activeMenu(){
    line1__bars.classList.toggle("activeline1__bars-menu")
    line2__bars.classList.toggle("activeline2__bars-menu")
    line3__bars.classList.toggle("activeline3__bars-menu")
    menuDesplegable.classList.toggle("menu_active")

    console.log("funciona")

}


