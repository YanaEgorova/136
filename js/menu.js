const menuBtn = document.querySelector('.js_menu-btn');
const menu = document.querySelector('.js_menu');

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    menu.classList.toggle('active');
}