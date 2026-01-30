
let btn = document.querySelector("#menu-button");
let menu = document.querySelector("#nav-links");

const picGrid = document.querySelector('#pic-grid');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

picGrid.addEventListener('click', openModal);

function openModal(e){
    console.log(e.target);
    const img = e.target;
    const src = img.getAttribute('src');
    const alt = img.getAttribute('alt');
    
    const full = src.replace('sm', 'full');
    modalImage.src = full;
    modalImage.alt = alt;
    modal.showModal();
}

// Close modal on button click
closeButton.addEventListener('click', () => {
    modal.close();
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});
     


btn.addEventListener("click", toggleMenu );

function toggleMenu() {
    menu.classList.toggle("hide");
    btn.classList.toggle("menu_open");
}