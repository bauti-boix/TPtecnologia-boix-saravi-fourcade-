alert("Bienvenidos a mi sitio.");
let inicioSaludo = document.querySelector(".saludo")
let inicioBienvenida = document.querySelector("h1");
let iniciarSesion = confirm("¿Esta seguro de querer avanzar?")
if (iniciarSesion) {
    if (inicioSaludo) {
        inicioSaludo.textContent = "Qué alegría que quieras continuar tu visita";
    }
    let nombre = prompt("Ingresar nombre:");
    if (inicioBienvenida && nombre) {
        inicioBienvenida.textContent = "Bienvenido " + nombre;
    }
    let edad = prompt("¿Cuantos años tenes?");
    edad = Number(edad);
    if (edad > 17) {
        let programacion = confirm("¿Te gusta la programacion?")
        if (!programacion) {
            document.querySelector(".background-img").innerHTML = '<img src="./img/gatito.jpeg" alt="gatito triste"></img>'
        } else {
            document.querySelector(".background-img").innerHTML = '<img src="./img/programmer.jpeg" alt="img programador"></img>'
            let avatar = document.querySelector(".avatar")
            let ruta = prompt("Decime la ruta de tu imagen")
            avatar.src = ruta
            let pelicula = {
                nombre: "",
                director: "",
                duracion: 0,
                actor: "",
            };
            pelicula.nombre = prompt("¿Cual es el nombre de tu pelicula favorita?");
            pelicula.director = prompt("¿Cual es el nombre de su director favorito?")
            pelicula.duracion = prompt("¿Cual es la duracion de su pelicula favorita?")
            pelicula.actor = prompt("¿Cual es tu actor favorito?")
            let contenedorPelicula = document.querySelector("#pelicula");
            let listaPelicula = documentquerySelector("#pelicula ul")
            if (listaPelicula) {
                listaPelicula.innerHTML = `<li>Nombre: ${pelicula.nombre}</li> <li>Director: ${pelicula.director}</li> <li>Duración: ${pelicula.duracion}</li> <li>Actor: ${pelicula.actor}</li>`;
            }
         if (contenedorPelicula) {
                contenedorPelicula.style.display = "block"; }
    } 
} else {
    let containerGeneral = document.querySelector(".container-general")
    let accesoDenegado = document.querySelector("#accesoDenegado");
    if (containerGeneral) {
        containerGeneral.style.display = "none";
    }
    if (accesoDenegado) {
        accesoDenegado.style.display = "block";
    }
} 

}else {
    if (inicioSaludo) {
        inicioSaludo.textContent = "Lamentamos que no quieras continuar tu visita";
    }
}