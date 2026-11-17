let userEmail = localStorage.getItem('userEmail');
let headerSesion = document.querySelector('.sesion');
if (userEmail) {
    headerSesion.innerHTML = 'Bienvenido ' + userEmail + '<a href="#" id="logout">Logout</a>'
}