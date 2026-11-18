let nombre = document.querySelector("#producto-nombre");
let marca = document.querySelector("#producto-marca");
let descripcion = document.querySelector("#producto-descripcion");
let precio = document.querySelector("#producto-precio");
let foto = document.querySelector("#producto-foto");
let categoria = document.querySelector("#producto-categoria");
let stock = document.querySelector("#producto-stock");
let tags = document.querySelector("#producto-tags");
let ratingProd = document.querySelector("#producto-rating");
let comentarios = document.querySelector("#producto-comentarios");
let busqueda = new URLSearchParams(window.location.search);
let id = busqueda.get("id");

if (!id) {
    nombre.innerHTML = "No se indicó un producto.";
} else {
    fetch(`https://dummyjson.com/products/${id}`)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            let producto = data;
            nombre.innerHTML = producto.title;
            marca.innerHTML = producto.brand;
            descripcion.innerHTML = producto.description;
            precio.innerHTML = `${producto.price}`;
            foto.src = producto.thumbnail;
            categoria.innerHTML = producto.category;
            categoria.href = `./category.html?cat=${producto.category}`;
            stock.innerHTML = producto.stock;
            tags.innerHTML = producto.category; 
            for (let i = 0; i < producto.reviews.length; i++) {
            comentarios.innerHTML += `
            <section class="comentariosing">
            <h3>${producto.reviews[i].reviewerName}</h3>
            <p>Rating: ${producto.reviews[i].rating} / 5</p>
            <p>${producto.reviews[i].comment}</p>
            <p>${producto.reviews[i].date.slice(0, 10)}</p>
            </section>
         `;
        }
        })
        .catch(function(error) {
        console.log("Error al cargar productos: " + error);
    });
};
