let seccion1 = document.querySelector("#seccion1");
let seccion2 = document.querySelector("#seccion2");

fetch("https://dummyjson.com/products/category/groceries")
    .then(function(response) {
        return response.json();
    })
.then(function(data) {

        let productos = data.products;
 for (let i = 0; i < 10; i++) {

            seccion1.innerHTML += `
                <article class="productoindex">
                    <a href="product.html?id=${productos[i].id}">
                        <img src="${productos[i].thumbnail}">
                        <h1>${productos[i].title}</h1>
                        <p>${productos[i].description}</p>
                        <h2>$${productos[i].price}</h2>
                        <span class="botondetalle">VER DETALLE</span>
                    </a>
                </article>
            `;
        }
    })
      .catch(function(error) {
        console.log("Error al cargar productos: " + error);
    });
    fetch("https://dummyjson.com/products/category/smartphones")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {

        let productos = data.products;

        for (let i = 0; i < 10; i++) {

            seccion2.innerHTML += `
                <article class="productoindex">
                    <a href="product.html?id=${productos[i].id}">
                        <img src="${productos[i].thumbnail}">
                        <h1>${productos[i].title}</h1>
                        <p>${productos[i].description}</p>
                        <h2>$${productos[i].price}</h2>
                        <span class="botondetalle">VER DETALLE</span>
                    </a>
                </article>
            `;
        }
    })

    .catch(function(error) {
        console.log("Error al cargar productos: " + error);
    });
