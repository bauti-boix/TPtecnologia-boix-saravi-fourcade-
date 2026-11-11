let userEmail = localStorage.getItem('userEmail');
let navSesion = document.querySelector('.sesion');
if (userEmail) {
    navSesion.innerHTML = 'Bienvenido ' + userEmail + '<a href="#" onclick="cerrarSesion()">Logout</a>'}
    function cerrarSesion() {
        localStorage.removeItem('userEmail');
        location.reaload();
    }