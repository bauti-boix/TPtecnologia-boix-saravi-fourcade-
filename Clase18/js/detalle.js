let queryString = location.search;
let urlParams = new URLSearchParams(queryString);
let identificador = urlParams.get('identificador');
fetch(`https://rickandmortyapi.com/api/character/${identificador}`)
.then(function(response) {
     return response.json()
})
    .then(function(data) {
        let div = document.querySelector("div")
        div.innerHTML = `
        <h1>${data.name}</h1>
        <p>Status: ${data.status}</p>
        <img src=${data.image} alt="">`
})
    .catch(function(error) {
    console.log("Error: " + error);
})