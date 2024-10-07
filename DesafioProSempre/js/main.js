const root = document.querySelector("#app")


function renderizar(pagina) {
    fetch(`./paginas/${pagina}/${pagina}.html`)
        .then(response => response.text())
        .then(data => {
            root.innerHTML = data
        })
}

renderizar("home") 