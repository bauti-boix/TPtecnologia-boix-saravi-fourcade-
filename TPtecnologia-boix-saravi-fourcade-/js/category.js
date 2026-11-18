let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let cat = queryStringObj.get('cat')
let category = document.querySelector('.preview')
let titulo = document.querySelector(".toptext h1")
let navCat = document.querySelector("#NavCat")

if (navCat) {
    fetch("https://dummyjson.com/products/categories")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        let categories = data;
        let contenido = "";
        for (let i = 0; i < categories.length; i++) {
            contenido += `
                <li><a href="./category.html?cat=${categories[i].slug}">${categories[i].name}</a></li>
            `;
        }
        navCat.innerHTML = contenido;
    })
    .catch(function(error) {
        console.log("Error al cargar categorías: " + error);
    });
}


if (cat && titulo) {
    titulo.innerText = cat;
    fetch(`https://dummyjson.com/products/category/${cat}`)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
         let productos = data.products; 
         let contenido = "";
            for (let i = 0; i < productos.length; i++) {
                contenido += `
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
            category.innerHTML = contenido;
        })
    .catch(function(error) {
        console.log("Error al cargar categoria: " + error);
    });
}