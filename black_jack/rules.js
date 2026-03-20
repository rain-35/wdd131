// menu button functionality
nav_box = document.getElementById("nav_box");
menu_button = document.getElementById("menu_button");

menu_button.addEventListener("click", toggleMenu);

function toggleMenu() {
    nav_box.classList.toggle("hidden");
}
// end menu button functionality