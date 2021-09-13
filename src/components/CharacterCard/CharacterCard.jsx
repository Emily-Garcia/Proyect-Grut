import React from "react"
import "./CharacterCard.css"

//Creamos un componente para mostrar la información del personaje en la página principal
//Recibimos dos variables
//character - toda la información del personake
//onClick - una funcion para ir a la página donde se muestra el detalle del personaje

const CharacterCard = ({character, onClick}) => {

    //Deconstruimos la variable character para mostrar cada valor
    const {species, name, type, gender, image, status, id} = character

    return(
            //Creamos el contenedor para la información del personaje
            <div
                //Le agregamos estilo al contenedor principal
                className="card shadow-lg p-3 mb-5 bg-body rounded"
                //Le pasamos el id del personaje para que funcione correctamente la función onClick
                onClick={() => onClick(id)}
            >
                <div className="card-horizontal">
                    <div className="img-square-wrapper">
                        <img alt={`Character: ${name}`} src={image} className="character-image" />
                    </div>
                    <div className="card-body">
                        <p className="card-text-title">{name}</p>
                        <p className="card-text">{species}</p>
                        <p className="card-text">{status}</p>
                        <p className="card-text">{type}</p>
                        <p className="card-text">{gender}</p>
                    </div>
                </div>
            </div>
    )
}


export default CharacterCard