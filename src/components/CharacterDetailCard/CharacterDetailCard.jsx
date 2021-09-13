import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import "./CharacterDetail.css"
import back from '../../images/back.svg'
import { Link } from "react-router-dom"

const CharacterDetailCard = () => {

    //Creamos las variables
    //character - el cual tendrá toda la información del personaje
    //setCharacter - para poder asignarle valores a character
    //characterId - este es el id del personaje, mostraremos el detalle del personaje que tiene ese id
    const [character, setCharacter] = useState([])
    const { characterId } = useParams()

    //usamos la función useEffect para poder obtener toda la información de la API
    useEffect (() => {
        axios.get(`https://rickandmortyapi.com/api/character/${characterId}`)
            .then(res => {
                const character = res.data
                //metemos toda la información recibida en la variable character
                setCharacter(character)
            })
            .catch(error => console.log(error))
    }, [characterId]) //Esta función cambiará cada que cambie el id del personaje

    return (
            <div className="containerDiv">
            <div className="cardContainer">
                <div className="imgContainer">
                    <img alt={`Character: ${character.name}`} src={character.image}/>
                </div>
                <div className="characterInfo">
                <Link to='/characters' className="returnButton"><img alt="Return to Home" src={back} className="returnImg"/></Link>
                    <p className="characterText">{character.species}</p>
                    <h1 className="characterTitle">{character.name}</h1>
                    <p className="characterText">{character.status}</p>
                    <p className="characterText">{character.type}</p>
                    <p className="characterText">{character.gender}</p>
                </div>
            </div>
            </div>
    )
}

export default CharacterDetailCard