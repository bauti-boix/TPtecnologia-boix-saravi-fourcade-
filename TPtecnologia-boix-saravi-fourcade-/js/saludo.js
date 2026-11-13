let userEmail = localStorage.getItem('userEmail');
let navSesion = document.querySelector('.sesion');
if (userEmail) {
    navSesion.innerHTML = 'Bienvenido ' + userEmail + '<a href="#" id="logout">Logout</a>'
}