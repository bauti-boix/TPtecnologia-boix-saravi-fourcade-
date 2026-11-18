let register = document.querySelector('.texto');
let errorRegister = document.querySelector('#errorRegister');
register.addEventListener('submit', function(e){
    let email = document.querySelector('#mail').value;
    let password = document.querySelector('#password').value;
    let repetirPassword = document.querySelector('#password2').value;
    if (email === '') {
        errorRegister.style.color = 'red';
        errorRegister.textContent = 'El email es obligatorio. Por favor, revise.';
        e.preventDefault();
    } else if (password === '') {
        errorRegister.style.color = 'red';
        errorRegister.textContent = 'La contraseña es obligatoria. Por favor, revise.';
        e.preventDefault();
    } else if (password.length < 6) {
        errorRegister.style.color = 'red';
        errorRegister.textContent = 'La contraseña debe tener al menos 6 caracteres.';
        e.preventDefault();
    } else if (password !== repetirPassword) {
        errorRegister.style.color = 'red';
        errorRegister.textContent = 'Las contraseñas no coinciden. Por favor, revise.';
        e.preventDefault();
    }
});
