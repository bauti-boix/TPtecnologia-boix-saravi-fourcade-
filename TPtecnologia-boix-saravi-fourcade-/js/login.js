let login = document.querySelector('.texto');
login.addEventListener('submit', function(e){
    let email = document.querySelector('#mail').value;
    let password = document.querySelector('#password').value;
    if (email === '') {
        alert('El email es obligatorio. Por favor, revise.');
        e.preventDefault();
    } else if (password === '') {
        alert('La contraseña es obligatoria. Por favor, revise.');
        e.preventDefault();
    } else if (password.length < 6) {
        alert('La contraseña debe tener al menos 6 caracteres.');
        e.preventDefault();
    } else {
        localStorage.setItem('userEmail', email)
    }
});