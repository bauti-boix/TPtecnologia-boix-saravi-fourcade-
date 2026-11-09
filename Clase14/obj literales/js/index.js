let misDatos = {
    nombre: "Fausto",
    apellido: "Beloqui",
    dni: 26062011,
    edad: 18,
    comidasFavoritas: ['Sushi', 'Tacos', 'Asado'],
    saludar: function() {
        return 'Hola mi nombre es ' + this.nombre + ' ' + this.apellido + ' y tengo ' + this.edad + ' años. Mi primer comida favorita es ' + this.comidasFavoritas[0]
    }
};

console.log(misDatos.saludar())

let auto = {
    marca: "Renault",
    modelo: "Kardian",
    año: 2025,
    color: "negro",
    posicion: 0,
    avanzar: function(n){
        this.posicion= this.posicion + n;
    },
    retroceder: function(n){
        this.posicion = this.posicion - n;
    },
}

auto.avanzar(5);
auto.retroceder(2);
auto.avanzar(8);

console.log(auto.posicion);

let nuevoAuto = {
    marca: "Renault",
    modelo: "Kardian",
    año: 2025,
    color: "negro",
    posicion: 0,
    moverse: function(n){
        this.posicion= this.posicion + n;
    },
}

nuevoAuto.moverse(7);
nuevoAuto.moverse(-3);

console.log(nuevoAuto.posicion);

let ironMan = {
    nombre: "Iron Man",
    equipo: "Avengers",
    poder:  ["Volar", "Lanzar misiles", "Disparar láser"],
    energia: 100,
    getPoder: function(i){
        this.energia = this.energia -= 10;
        return 'Poder Elegido de ' + this.nombre + ': ' + this.poder[i] + '. Energia restante: ' + this.energia
    }
}

let hulk = {
    nombre: "Hulk",
    equipo: "Avengers",
    poder: ["Aplastar", "Gritar", "Golpear"],
    energia: 100,
    getPoder: function(i){
        this.energia = this.energia -= 10;
        return 'Poder Elegido de ' + this.nombre + ': ' + this.poder[i] + '. Energia restante: ' + this.energia
    }
}

console.log(ironMan.getPoder(0));

console.log(hulk.getPoder(2));

console.log(ironMan.getPoder(2));

console.log(hulk.getPoder(1));

console.log(ironMan.getPoder(2));

console.log(hulk.getPoder(0));

console.log(ironMan.getPoder(1));