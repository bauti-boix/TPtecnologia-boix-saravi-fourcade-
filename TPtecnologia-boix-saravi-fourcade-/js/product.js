let busqueda = new URLSearchParams(window.location.search);
let id = busqueda.get("id");

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


if (!id) {
    estado.textContent = "No se indicó un producto.";
} else {
    
}