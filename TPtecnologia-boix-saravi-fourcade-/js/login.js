let login = document.querySelector('.texto');
let errorLogin = document.querySelector('#errorLogin');
login.addEventListener('submit', function(e){
    let email = document.querySelector('#mail').value;
    let password = document.querySelector('#password').value;
    if (email === '') {
        errorLogin.style.color = 'red';
        errorLogin.textContent = 'El email es obligatorio. Por favor, revise.';
        e.preventDefault();
    } else if (password === '') {
        errorLogin.style.color = 'red';
        errorLogin.textContent = 'La contraseña es obligatoria. Por favor, revise.';
        e.preventDefault();
    } else if (password.length < 6) {
        errorLogin.style.color = 'red';
        errorLogin.textContent = 'La contraseña debe tener al menos 6 caracteres.';
        e.preventDefault();
    } else {
        localStorage.setItem('userEmail', email)
    }
});