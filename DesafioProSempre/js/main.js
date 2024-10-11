import { renderizarDivs } from "./utility/utils"
import { profissionais, artigos, materiais, cardsColorir, cardsMaterias, topicosPrincipais, itemTopico  } from "./utility/data"
import { carroselEquipe, cardArtigo, cards, cardTopicosPrincipais, cardItemTopico} from "./utility/templates"

renderizarDivs("artigos", artigos, cardArtigo)
renderizarDivs("materiais", materiais, cardArtigo)
renderizarDivs("profissionais", profissionais, carroselEquipe)
renderizarDivs("cards-didaticos", cardsColorir, cards )
renderizarDivs("cards-materias", cardsMaterias, cards )
renderizarDivs("topicos-populares", topicosPrincipais, cardTopicosPrincipais)
renderizarDivs("topicos", itemTopico, cardItemTopico)
