import React from "react"
import emptyHeart from '../../images/heart-shape.svg'
import "./CharacterCard.css"

const CharacterCard = ({character, onClick}) => {
    const {species, name, type, gender, image, status, id} = character
    return(
            <div
                className="card shadow-lg p-3 mb-5 bg-body rounded"
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
                    <div className="col-md-1">
                        <img alt="Favorite" src={emptyHeart}/>
                    </div>
                </div>
            </div>
    )
}


export default CharacterCard