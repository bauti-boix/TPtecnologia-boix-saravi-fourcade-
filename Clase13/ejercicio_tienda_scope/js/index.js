console.log("Calculadora de Tienda y Scope")

let nombreTienda = "Mi Tienda Digital";

function calcularDescuento(precio, porcentaje) {
return precio * (porcentaje / 100) }

function aplicarImpuesto(precio, porcentaje) {
return precio * (porcentaje / 100) }

function calcularPrecioFinal(precioBase, descuentoAplicado, impuestoAplicado) {
console.log("Procesando compra en: " + nombreTienda);
let mensajeExito = "¡Calculo realizado!";
return precioBase - descuentoAplicado + impuestoAplicado; }

let montoDescuento = calcularDescuento(10000, 10)

console.log(montoDescuento)

let montoImpuesto = aplicarImpuesto(10000, 21)

console.log(montoImpuesto)

let precioFinal = calcularPrecioFinal(10000, montoDescuento, montoImpuesto)

console.log(precioFinal)

console.log("Nombre de la tienda fuera de la funcion: " + nombreTienda)

//console.log("Mensaje fuera de la funcion: " + mensajeExito)