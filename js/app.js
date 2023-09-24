// Obtener elementos del DOM
const menuToggle = document.querySelector('.menu-toggle');
const headerNav = document.querySelector('.header-nav');

// Agregar un evento de clic al botón de hamburguesa
menuToggle.addEventListener('click', () => {
    headerNav.classList.toggle('active'); // Alternar clase 'active'
});
