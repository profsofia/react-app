import React from 'react'
import Card from "./Card"
import JavaScript from "../assets/JavaScript.jpg"
import react from "../assets/react.jpg"
import bootstrap from "../assets/bootstrap.jpg"


const cards = [
    {
        identificador:1,
        titulo: "tarjeta1",
        imagen: JavaScript,
        url :'https://profesofia.web.app'
    },
    {
        identificador: 2,
        titulo: "tarjeta2",
        imagen: react,
        url :'https://youtube/profesofia'
    },
    {
        identificador: 3,
        titulo: "tarjeta 3",
        imagen: bootstrap,
        url :'https://blog.profesofiaschenone.com'

    }

]

function Cards() {
    return (
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
              {
                  cards.map(cards => (
                    <div className="col-md-4" key={cards.identificador}>
                       <Card titulo={cards.titulo} urlImagen={cards.imagen} redireccionamiento={cards.url} />
                     </div>
                  ))
              }
            </div>
        </div>
    )
}

export default Cards
