let nombre = prompt("Por favor, ingresa tu nombre:");
console.log("Nombre del usuario:", nombre);

let edad = prompt("Por favor, ingresa tu edad:");
console.log("Edad del usuario:", edad);

let fanDeportes = confirm  ("¿Te gustan los deportes?")
console.log("¿Es fan de los deportes?:", fanDeportes);

let mensaje = alert("Muchas gracias " + nombre + " por responder nuestras preguntas")

let usuario = {
    nombre: nombre,
    edad: edad,
    fanDeportes: fanDeportes,
    deportistaProfesional: function() {
        if (this.fanDeportes) {
            return "Si, soy fan de los deportes";
        } else {
            return "No soy tan fan aún de los deportes";
        }
    }
};

console.log("Resultado de deportistaProfesional():", usuario.deportistaProfesional());