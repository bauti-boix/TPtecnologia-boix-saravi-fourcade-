let logout = document.querySelector('#logout')
if (logout){
    logout.onclick = function() {
        localStorage.removeItem('userEmail');
        let navSesion = document.querySelector('.sesion');
        navSesion.innerHTML = '<a href="login.html">Inicia Sesion</a> <a href="register.html">REGISTARTE</a>'
        location.reload();
    }
}