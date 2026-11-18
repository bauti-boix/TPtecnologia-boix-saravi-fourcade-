let queryString2 = new URLSearchParams(window.location.search);
let termino = queryString2.get("busqueda");

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
                        <a href="product.html?id=${productos[i].id}">
                            <img src="${productos[i].thumbnail}">
                            <h1>${productos[i].title}</h1>
                            <p>${productos[i].description}</p>
                            <h2>$${productos[i].price}</h2>
                            <button class="comprar">VER DETALLE</button>
                        </a>
                    </article>
                `;
            }
        }
    })
    .catch(function(error) {
        console.log("Error al buscar productos: " + error);
    });