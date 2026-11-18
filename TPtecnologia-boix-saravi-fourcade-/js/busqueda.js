let busqueda = document.querySelector('.buscador');
let searchError = document.querySelector('#searchError');

busqueda.addEventListener('submit', function(e){
    let resBusqueda = document.querySelector('#search-results').value;
        if (resBusqueda === '') {
        searchError.style.color = 'red';
        searchError.style.backgroundColor = 'white';
        searchError.style.padding = '5px';
        searchError.style.borderRadius = '5px';
        searchError.innerHTML = 'No puede estar vacio el campo de busqueda. Por favor, revise.';
        e.preventDefault();
        } else if (resBusqueda.length < 3) {
        searchError.style.color = 'red';
        searchError.style.backgroundColor = 'white';
        searchError.style.padding = '5px';
        searchError.style.borderRadius = '5px';
        searchError.innerHTML = 'El termino buscado debe tener al menos 3 caracteres.';
        e.preventDefault();
        } 
});