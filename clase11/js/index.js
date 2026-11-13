
alert("Bienvenidos a mi sitio.");


let quiereAvanzar = confirm("¿Está seguro de querer avanzar?");
let h2Saludo = document.querySelector(".saludo");

if (quiereAvanzar) {
    h2Saludo.innerText = "Qué alegría que quieras continuar tu visita";
    
   
    let nombre = prompt("Por favor, ingresa tu nombre:");
    let h1 = document.querySelector("h1");
    h1.innerText = "Bienvenido " + nombre;

  
    let edad = prompt("¿Cuántos años tenés?");

    if (parseInt(edad) < 18) {
     
        document.querySelector(".container-general").style.display = "none";
        document.querySelector("#accesoDenegado").style.display = "block";
    } else {
     
        let leGustaProgra = confirm("¿Te gusta la programación?");
        let divBackground = document.querySelector(".background-img");

        if (leGustaProgra) {
            divBackground.innerHTML = '<img src="img/programmer.jpeg" alt="Programador">';
        } else {
            divBackground.innerHTML = '<img src="img/gatito.jpeg" alt="Gatito">';
        }

      
        let urlAvatar = prompt("Ingresa la URL de una imagen para tu avatar:");
        let imgAvatar = document.querySelector(".avatar");
        imgAvatar.src = urlAvatar;

     
        let pelicula = {
            nombre: prompt("¿Cuál es tu película favorita?"),
            director: prompt("¿Quién es el director de la película?"),
            duracion: prompt("¿Cuánto dura la película (en minutos)?"),
            actor: prompt("¿Quién es el actor/actriz principal?")
        };

      
        document.querySelector("#peliNombre").innerText = "Nombre: " + pelicula.nombre;
        document.querySelector("#peliDirector").innerText = "Director: " + pelicula.director;
        document.querySelector("#peliDuracion").innerText = "Duración: " + pelicula.duracion + " minutos";
        document.querySelector("#peliActor").innerText = "Actor principal: " + pelicula.actor;


        document.querySelector("#listaPelicula").style.display = "block";
    }

} else {
    h2Saludo.innerText = "Lamentamos que no quieras continuar tu visita";
}