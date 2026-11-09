let queryString = location.search;
let searchParams = new URLSearchParams(queryString);
let busqueda = searchParams.get('q');
let resultadosBusq = document.querySelector(".search-results")
fetch(`https://rickandmortyapi.com/api/character/?name=${busqueda}`)
.then(function(response) {
     return response.json()
})
    .then(function(data) {
        let busq = "";

        for (let i = 0; i < data.results.length; i++) {
        busq += `
        <a href="./detalle.html?identificador=${data.results[i].id}">
        <p>Status: ${data.status}</p>
        <img src=${data.image} alt="">
        </a>
        `
        }
        resultadosBusq.innerHTML = busq;
})
    .catch(function(error) {
    console.log("Error: " + error);
})