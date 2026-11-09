function generarReporte(){
    let inicio = confirm ("¿Queres iniciar?")
    if (!inicio) {
        alert("Gracias por haber venido");
        return;
    }
    let qIntegrantes = prompt("Ingrese la cantidad de integrantes de la familia:");
    qIntegrantes = Number(qIntegrantes);
    if (isNaN(qIntegrantes) || qIntegrantes < 2) {
        alert("El numero de integrantes ingresado no es real.")
        return;
    }
    console.log("Cantidad de integrantes ingresado", qIntegrantes)
    let integrantes = [];
    for (let i = 1; i <= qIntegrantes; i++) {
        let nombre = prompt("Ingresar nombre del integrante " + i + ":");
        if (!nombre || nombre.trim() === "") {
            alert("No puede no tener nombre.")
            return;
        }
        let gasto = prompt("Ingresar gasto del integrante " + i + ":");
        if (!gasto || gasto.trim() === "" || isNaN(gasto) || Number(gasto) < 0) {
            alert("Debe haber un gasto numerico y de un numero de dinero.")
            return;
        }
        gasto = Number(gasto);
        integrantes.push({
            nombre: nombre,
            gasto: gasto
        });
    }
    console.log(integrantes);
    let gastoTotal = 0;
    for (let i=0; i < integrantes.length; i++) {
        console.log("Nombre: " + integrantes[i].nombre + " | Gasto: $" + integrantes[i].gasto);
        gastoTotal += integrantes[i].gasto;
    }
    if (gastoTotal > 1000) {
        alert("Debemos pedir un prestamo")
    }
    let gastoPromedio = gastoTotal / integrantes.length;
    console.log("Promedio de gasto del dia: " + gastoPromedio)
    if (gastoPromedio < 500) {
        alert("Festejemos!")
    }
}
generarReporte();