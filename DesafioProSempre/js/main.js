import { renderizarDivs } from "./utility/utils"
import { profissionais, artigos, materiais, cardsColorir, cardsMaterias } from "./utility/data"

import { cardArtigo, carroselEquipe, cards } from "./utility/templates"

renderizarDivs("artigos", artigos, cardArtigo)
renderizarDivs("materiais", materiais, cardArtigo)
renderizarDivs("profissionais", profissionais, carroselEquipe)
renderizarDivs("cards-didaticos", cardsColorir, cards )
renderizarDivs("cards-materias", cardsMaterias, cards )
