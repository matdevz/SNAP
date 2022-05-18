let btnMenu = document.getElementById('btnMenu');
let navMenu = document.getElementById('navMenu');

btnMenu.addEventListener('click', toggleMenu);

function toggleMenu() {
    navMenu.classList.toggle('active');
}
