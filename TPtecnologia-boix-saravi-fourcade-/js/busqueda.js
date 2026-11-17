function busquedaExitosa() {
    let resBusqueda = document.querySelector('#search-results').value;
    if (resBusqueda === '') {
        alert('No puede estar vacio el campo de busqueda. Por favor, revise.');
        return false;
    }
    if (resBusqueda.length < 3) {
        alert('El termino buscado debe tener al menos 3 caracteres.');
        return false;
    } 
        return true;
}