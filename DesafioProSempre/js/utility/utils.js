
function renderizarProfissionais(id, data) { 
    const elementoDaPagina = document.querySelector(`#${id}`)
    elementoDaPagina.innerHTML = data.map((item) => { 
        return `
            
        `
    }).join("")
}



export { renderizarProfissionais }