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

// FUNCIÓN DEL CORREO

function saveEmail() {
    // Obtener el valor del campo de entrada de correo electrónico
    const emailInput = document.getElementById("email");
    const email = emailInput.value;

    // Actualizar la acción del formulario con el correo electrónico
    const form = document.getElementById("myForm");
    form.action = `https://formsubmit.co/${email}`;

    // Enviar el formulario
    form.submit();
}

function sendForm() {
    // Obtener el valor del campo de entrada de correo electrónico
    const emailInput = document.getElementById("email");
    const email = emailInput.value;

    // Actualizar la acción del formulario con el correo electrónico
    const form = document.getElementById("myForm2");
    form.action = `https://formsubmit.co/${email}`;

    // Enviar el formulario
    form.submit();
}