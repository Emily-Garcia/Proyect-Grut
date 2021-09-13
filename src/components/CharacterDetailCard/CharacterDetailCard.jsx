import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import "./CharacterDetail.css"
import back from '../../images/back.svg'
import { Link } from "react-router-dom"

const CharacterDetailCard = () => {

    const [character, setCharacter] = useState([])
    const { characterId } = useParams()

    useEffect (() => {
        axios.get(`https://rickandmortyapi.com/api/character/${characterId}`)
            .then(res => {
                const character = res.data
                setCharacter(character)
            })
            .catch(error => console.log(error))
    }, [characterId])

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