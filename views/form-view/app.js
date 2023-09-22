function enviarFormulario() {
    // Obtener el valor del campo "email"
    const email = document.getElementById("emailInput").value;

    // Agregar el valor de "email" a la URL de action antes de enviar el formulario
    const form = document.querySelector('.form');
    form.action = `https://formsubmit.co/${email}`;

}