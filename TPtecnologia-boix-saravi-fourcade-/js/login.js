let login = document.querySelector('.texto');
let errorLogin = document.querySelector('#errorLogin');

login.addEventListener('submit', function(e){
    let email = document.querySelector('#mail').value;
    let password = document.querySelector('#password').value;
    if (email === '' || password.length < 6) {
        e.preventDefault();
    }
    if (email === '') {
        errorLogin.style.color = 'red';
        errorLogin.innerHTML = 'El email es obligatorio. Por favor, revise.';
    } else if (password === '') {
        errorLogin.style.color = 'red';
        errorLogin.innerHTML = 'La contraseña es obligatoria. Por favor, revise.';
    } else if (password.length < 6) {
        errorLogin.style.color = 'red';
        errorLogin.innerHTML = 'La contraseña debe tener al menos 6 caracteres.';
    } else {
        localStorage.setItem('userEmail', email)
    }
});
