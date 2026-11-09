console.log("Control de compras y presupuesto")

let listaCompras = ['pan', 'leche', 'huevos']

let presupuestoMaximo = 20000

let precioPorProducto = 4500

console.log(listaCompras[0])

console.log(listaCompras[2])

let totalEstimado = listaCompras.length * precioPorProducto

console.log(totalEstimado);

let descuento = totalEstimado * "0.1"

console.log(descuento);

let totalFinal = totalEstimado - descuento

console.log(totalFinal);

listaCompras.push('mermelada', 'helado')

console.log(listaCompras)

console.log(listaCompras[3])

listaCompras.pop('helado')

let costoPromedioPorProducto = totalFinal / listaCompras.length

console.log(costoPromedioPorProducto);

let estaDentroDelPresupuesto = totalFinal <= presupuestoMaximo

let esListaLarga = listaCompras.length > 3

let superaElLimite = listaCompras.length > 5

console.log(estaDentroDelPresupuesto);

console.log(esListaLarga);

console.log(superaElLimite);

console.log("¿El gasto final está dentro del presupuesto?: " + estaDentroDelPresupuesto)

console.log("¿Es una lista de más de 3 productos?: " + esListaLarga)

console.log("¿La cantidad de productos supera los 5 elementos?: " + superaElLimite)