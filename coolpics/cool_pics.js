let btn = document.querySelector("#menu-button");
let menu = document.querySelector("#nav-links");

btn.addEventListener("click", toggleMenu );

function toggleMenu() {
    menu.classList.toggle("hide");
    btn.classList.toggle("menu_open");
}