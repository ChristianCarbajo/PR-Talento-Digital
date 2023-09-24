const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
const logo = document.querySelector('.logo');
const headerLogo = document.querySelector('.header-logo');

// Abre el menú desplegable y oculta el logo y la clase .header-logo
menuToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    logo.classList.toggle('logo-hidden');
    headerLogo.classList.toggle('hidden');
});



// FUNCIÓN DEL CORRE
document.addEventListener("DOMContentLoaded", function () {
    const cardContainers = document.querySelectorAll(".card-container");

    cardContainers.forEach(function (container, index) {
        setTimeout(function () {
            container.classList.add("visible");
        }, index * 300);
    });
});