
let selectElem = document.querySelector('select');
let logoImg = document.getElementById('logo');

selectElem.addEventListener('change', changeTheme);



function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        document.querySelector('body').id = 'dark_mode';
        logoImg.src = 'byui-logo-white.png';
    } else {
        document.querySelector('body').id = '';
        logoImg.src = 'byui-logo-blue.webp';
    }
}           
                    