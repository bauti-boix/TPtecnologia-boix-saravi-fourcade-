let busqueda = document.querySelector('.buscador');
busqueda.addEventListener('submit', function(e){
    let resBusqueda = document.querySelector('#search-results').value;
    if (resBusqueda === '') {
        alert('No puede estar vacio el campo de busqueda. Por favor, revise.');
        e.preventDefault();
    } else if (resBusqueda.length < 3) {
        alert('El termino buscado debe tener al menos 3 caracteres.');
        e.preventDefault();
    } 
});