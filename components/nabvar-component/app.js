const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
const logo = document.querySelector('.logo');

// Abre el menú desplegable y oculta el logo
menuToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    logo.classList.toggle('logo-hidden');
});
