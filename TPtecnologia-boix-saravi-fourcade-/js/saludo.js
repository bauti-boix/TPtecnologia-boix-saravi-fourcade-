let userEmail = localStorage.getItem('userEmail');
let headerSesion = document.querySelector('.sesion');
if (userEmail) {
    headerSesion.innerHTML = '<span class="saludo"> Bienvenido: ' + userEmail + '</span>' + '<a href="index.html">HOME</a>' + '<a href="#" id="logout">Logout</a>'
}