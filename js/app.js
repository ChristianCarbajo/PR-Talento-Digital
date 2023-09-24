//Ocolutar icono y texto header en responsive
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
const logo = document.querySelector('.logo');
const headerLogo = document.querySelector('.header-logo');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    logo.classList.toggle('logo-hidden');
    headerLogo.classList.toggle('hidden');
});


//Animación colaboladores
document.addEventListener('DOMContentLoaded', function () {
    const containerIndexes = document.querySelectorAll('.container-index');
    containerIndexes.forEach(function (container) {
        container.classList.add('visible');
    });
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