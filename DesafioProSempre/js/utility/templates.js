// templates de string para replicar

const carroselEquipe = `
    <div class="profissional">
        <img src={imagem}> 
        <h3>{nome}</h3>
        <p>{profissao}</p>
        <p>{extraInfo}</p>
    </div>
`

const cardArtigo = `
    <div>
        <img class="card-artigo" src={imagem}>
        <p class="card-descricao">{descricao}</p>
    </div>
`

export { cardArtigo, carroselEquipe }
