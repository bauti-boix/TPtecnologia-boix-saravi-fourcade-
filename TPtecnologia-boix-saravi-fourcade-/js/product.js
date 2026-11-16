let nombre = document.querySelector("#producto-nombre");
let marca = document.querySelector("#producto-marca");
let descripcion = document.querySelector("#producto-descripcion");
let precio = document.querySelector("#producto-precio");
let foto = document.querySelector("#producto-foto");
let categoria = document.querySelector("#producto-categoria");
let stock = document.querySelector("#producto-stock");
let tags = document.querySelector("#producto-tags");
let comentarios = document.querySelector("#producto-comentarios");
let estado = document.querySelector("#producto-estado");

let busqueda = new URLSearchParams(window.location.search);
let id = busqueda.get("id");

if (!id) {
    estado.textContent = "No se indicó un producto.";
} else {
    fetch(`https://dummyjson.com/products/${id}`)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            let producto = data;
            nombre.textContent = producto.title;
            marca.textContent = producto.brand;
            descripcion.textContent = producto.description;
            precio.textContent = `$${producto.price}`;
            foto.src = producto.thumbnail;
            categoria.textContent = producto.category;
            stock.textContent = producto.stock;
            tags.textContent = producto.category;
            comentarios.textContent = `Rating: ${producto.rating.rate} / 5`;
            
        });
}