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
         let productos = data.products;

        if (productos.length == 0) {
            resultados.innerText = "No hay resultados para el término: " + termino;
        } else {

            for (let i = 0; i < productos.length; i++) {

                resultados.innerHTML += `
                    <article class="productoindex">
                        <a href="producto.html?id=${productos[i].id}">
                            <img src="${productos[i].thumbnail}">
                            <h1>${productos[i].title}</h1>
                            <p>${productos[i].description}</p>
                            <h2>$${productos[i].price}</h2>
                            <span class="botondetalle">VER DETALLE</span>
                        </a>
                    </article>
                `;
            }
        }
    })