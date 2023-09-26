const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
const logo = document.querySelector('.logo');
const headerLogo = document.querySelector('.header-logo');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    logo.classList.toggle('logo-hidden');
    headerLogo.classList.toggle('hidden');
});


document.addEventListener('DOMContentLoaded', function () {
    const containerIndexes = document.querySelectorAll('.container-index');
    containerIndexes.forEach(function (container) {
        container.classList.add('visible');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const containerIndexes = document.querySelectorAll('.container-index');
    containerIndexes.forEach(function (container) {
        container.classList.add('visible');
    });
});



function saveEmail() {
    const emailInput = document.getElementById("email");
    const email = emailInput.value;

    const form = document.getElementById("myForm");
    form.action = `https://formsubmit.co/${email}`;

}


