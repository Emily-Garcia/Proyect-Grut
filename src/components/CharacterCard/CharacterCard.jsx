import React from "react"

function CharacterCard({character}) {
    const {species, name, type, gender, image, status} = character
    return(
        <div class="container-fluid">
                <div class="col-12">
                    <div class="card shadow-lg p-3 mb-5 bg-body rounded ">
                        <div class="card-horizontal">
                            <div class="img-square-wrapper">
                                <img alt={`Character: ${name}`} src={image} class="character-image" />
                            </div>
                            <div class="card-body">
                                <p class="card-text-title">{name}</p>
                                <p class="card-text">{species}</p>
                                <p class="card-text">{status}</p>
                                <p class="card-text">{type}</p>
                                <p class="card-text">{gender}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}


export default CharacterCard