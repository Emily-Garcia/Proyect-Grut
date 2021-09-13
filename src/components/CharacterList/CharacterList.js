import axios from 'axios'
import { useEffect, useState } from 'react'
import React from 'react'
import CharacterCard from '../CharacterCard'
import { useHistory } from "react-router-dom";
import { Bar, Input, Button } from '../FilterBar/FilterBarElements.js'
import { Title } from './CharacterListElements'
import "./CharacterList.css"

const CharacterList = () => {

    const [characters, setCharacter] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    let history = useHistory();

    useEffect (() => {
        axios.get('https://rickandmortyapi.com/api/character')
            .then(res => {
                const {results} = res.data
                setCharacter(results)
            })
            .catch(error => console.log(error))
    }, [])

    const handleShowCharacterDetail = (id) => {
        history.push(`/characters/${id}`)
    }

    return (
        <div>
            <Bar>
                <Input type="text" placeholder="Personaje" onChange={(event) => {
                    setSearchTerm(event.target.value)
                }} />
                <Button as="a" href="#">Filtrar</Button>
            </Bar>
            <Title>Personajes</Title>
            <div class="card-container">
                {characters.filter((character) => {
                    if (searchTerm =="") {
                        return character
                    } else if (character.name.toLowerCase().includes(searchTerm.toLowerCase())){
                        return character
                    }
                }).map(character =>
                    <CharacterCard
                        onClick={handleShowCharacterDetail}
                        key={character.id}
                        character={character}
                    />
                )}
            </div>
        </div>
    )
}

export default CharacterList