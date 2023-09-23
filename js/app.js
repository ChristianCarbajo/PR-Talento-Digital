const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
const headerLogo = document.querySelector('.header-logo'); 

// Abre el menú desplegable y oculta el texto
menuToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    headerLogo.classList.toggle('hidden');
});


document.addEventListener("DOMContentLoaded", function () {
    const cardContainers = document.querySelectorAll(".card-container");

    cardContainers.forEach(function (container, index) {
        setTimeout(function () {
            container.classList.add("visible");
        }, index * 300);
    });
});