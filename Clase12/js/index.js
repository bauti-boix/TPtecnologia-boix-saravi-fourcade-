function rectangulo(ancho,alto) {
    return ancho * alto + ' m2';
}
let area1 = rectangulo(6, 7);
console.log(area1);

function triangulo (base,altura) {
    return (base * altura) / 2 + ' m2';
}
let area2 = triangulo (8, 6);
console.log(area2);

function dolarHoy(pesos) {
    return pesos / 1560 + 'U$D'
}
let dolar = dolarHoy (1000000);
console.log(dolar);

function precioFinal()