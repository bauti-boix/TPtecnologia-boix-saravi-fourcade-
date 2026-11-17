let queryString = new URLSearchParams(window.location.search);
let termino = queryString.get("busqueda");

let tituloBusqueda = document.querySelector("#titulo-busqueda");
let resultados = document.querySelector("#resultados");

tituloBusqueda.innerText = "Resultados de búsqueda para: " + termino;

fetch(`https://dummyjson.com/products/search?q=${termino}`)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {