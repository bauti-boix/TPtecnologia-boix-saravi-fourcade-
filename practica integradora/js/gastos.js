
function generarReporte() {

    let iniciar = confirm("¿Querés iniciar el reporte de gastos?");

    if (iniciar == false) {
        alert("Gracias por haber venido");
        return;
    }

    let cantidad = Number(prompt("¿Cuántos integrantes tiene la familia?"));

    if (isNaN(cantidad) || cantidad <= 2 || !Number.isInteger(cantidad)) {
        alert("El valor necesario es un número entero mayor a 2");
        return;
    }


    let integrantes = [];


    for (let i = 0; i < cantidad; i++) {

        let nombre = prompt("Ingresá el nombre del integrante " + (i + 1));

        if (nombre == null || nombre.trim() == "") {
            alert("El nombre no puede estar vacío");
            return;
        }

        let gastoIngresado = prompt("Ingresá los gastos de " + nombre);

        if (gastoIngresado == null || gastoIngresado.trim() == "" || isNaN(Number(gastoIngresado))) {
            alert("El gasto debe ser un número y no puede estar vacío");
            return;
        }

        let gastos = Number(gastoIngresado);

 
        integrantes.push({
            nombre: nombre,
            gastos: gastos
        });
    }

  
    console.log("Lista de integrantes:");
    console.log(integrantes);


    let totalGastos = 0;

    for (let i = 0; i < integrantes.length; i++) {

        console.log("Nombre: " + integrantes[i].nombre);
        console.log("Gastos: $" + integrantes[i].gastos);

        totalGastos = totalGastos + integrantes[i].gastos;
    }

    console.log("Gastos totales de la familia: $" + totalGastos);


    if (totalGastos > 1000) {
        alert("Debemos pedir un préstamo");
    }

   
    let promedio = totalGastos / integrantes.length;

    console.log("Promedio de gasto por integrante: $" + promedio);

    if (promedio < 500) {
        alert("¡Festejamos!");
    }
}


generarReporte();
