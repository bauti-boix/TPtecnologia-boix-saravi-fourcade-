
let formulario = document.querySelector("form");

let nombre = document.querySelector("#fullName");
let email = document.querySelector("#email");
let telefono = document.querySelector("#phone");
let password = document.querySelector("#password");
let repetirPassword = document.querySelector("#rePassword");

let errorNombre = document.querySelector(".invalid-feedback.fullName");
let errorEmail = document.querySelector(".invalid-feedback.email");
let errorTelefono = document.querySelector(".invalid-feedback.phone");
let errorPassword = document.querySelector(".invalid-feedback.password");
let errorRepetir = document.querySelector(".invalid-feedback.rePassword");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    let correcto = true;

    errorNombre.style.display = "none";
    errorEmail.style.display = "none";
    errorTelefono.style.display = "none";
    errorPassword.style.display = "none";
    errorRepetir.style.display = "none";

    if (nombre.value == "") {
        errorNombre.innerText = "El nombre es obligatorio";
        errorNombre.style.display = "block";
        correcto = false;
    }

    if (email.value == "") {
        errorEmail.innerText = "El correo es obligatorio";
        errorEmail.style.display = "block";
        correcto = false;
    }

    if (telefono.value == "") {
        errorTelefono.innerText = "El teléfono es obligatorio";
        errorTelefono.style.display = "block";
        correcto = false;
    } else if (telefono.value.length < 8) {
        errorTelefono.innerText = "El teléfono debe tener al menos 8 caracteres";
        errorTelefono.style.display = "block";
        correcto = false;
    }

    if (password.value == "") {
        errorPassword.innerText = "La contraseña es obligatoria";
        errorPassword.style.display = "block";
        correcto = false;
    } else if (password.value.length <= 3) {
        errorPassword.innerText = "La contraseña debe tener más de 3 caracteres";
        errorPassword.style.display = "block";
        correcto = false;
    }

    if (repetirPassword.value == "") {
        errorRepetir.innerText = "Tenés que repetir la contraseña";
        errorRepetir.style.display = "block";
        correcto = false;
    } else if (repetirPassword.value != password.value) {
        errorRepetir.innerText = "Las contraseñas no coinciden";
        errorRepetir.style.display = "block";
        correcto = false;
    }

    if (correcto == true) {
        this.submit();
    }

});
