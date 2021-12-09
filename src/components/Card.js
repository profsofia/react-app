import React from 'react'
import './cards.css'
function Card({titulo, urlImagen, redireccionamiento}) {
    return (
        <div className="card text-center bg-dark animate__animated animate__fadeInUp">
            <div className="overflow">
            <img src={urlImagen} alt="imagen no disponible"
            className="card-img-top"
            />
            </div>
            <div className="card-body text-light" >
             <h4 className="card-title">
                 {titulo}
             </h4>
             <p className="card-text text-secondary">
                 lorem 
             </p>
             <a href={redireccionamiento} className="btn btn-outline-secondary" target="_blank" > Esto es un enlace</a>
            </div>
        </div>
    )
}

export default Card;
