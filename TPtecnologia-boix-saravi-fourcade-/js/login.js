function loginExitoso() {
    let email = document.querySelector('#mail').value;
    let password = document.querySelector('#password').value;
    if (email === '') {
        alert('El email es obligatorio. Por favor, revise.');
        return false;
    }
    if (password === '') {
        alert('La contraseña es obligatoria. Por favor, revise.');
        return false;
    }
    if (password.length < 6) {
        alert('La contraseña debe tener al menos 6 caracteres.');
        return false;
    }
    localStorage.setItem('userEmail', email);
    return true;
}
