let register = document.querySelector('.texto');
let errorRegister = document.querySelector('#errorRegister');

register.addEventListener('submit', function(e){
    let email = document.querySelector('#mail').value;
    let password = document.querySelector('#password').value;
    let repetirPassword = document.querySelector('#password2').value;
    if (email === '' || password.length < 6 || password !== repetirPassword) {
        e.preventDefault();
    }
    if (email === '') {
        errorRegister.style.color = 'red';
        errorRegister.innerHTML = 'El email es obligatorio. Por favor, revise.';
    } else if (password === '') {
        errorRegister.style.color = 'red';
        errorRegister.innerHTML = 'La contraseña es obligatoria. Por favor, revise.';
    } else if (password.length < 6) {
        errorRegister.style.color = 'red';
        errorRegister.innerHTML = 'La contraseña debe tener al menos 6 caracteres.';
    } else if (password !== repetirPassword) {
        errorRegister.style.color = 'red';
        errorRegister.innerHTML = 'Las contraseñas no coinciden. Por favor, revise.';
    }
});
