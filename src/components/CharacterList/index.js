import axios from 'axios'
import { useEffect, useState } from 'react'
import React from 'react'
import CharacterCard from '../CharacterCard'
import { Bar, Input, Button } from '../FilterBar/FilterBarElements.js'
import { Title, CardContainer } from './CharacterListElements'

const CharacterList = () => {

    const [characters, setCharacter] = useState([])

    useEffect (() => {
        axios.get('https://rickandmortyapi.com/api/character')
            .then(res => {
                const {results} = res.data
                console.log(results)
                setCharacter(results)
            })
            .catch(error => console.log(error))
    }, [])

    const [searchTerm, setSearchTerm] = useState('')

    return (
        <div>
            <Bar>
                <Input type="text" placeholder="Personaje" onChange={(event) => {
                    setSearchTerm(event.target.value)
                }} />
                <Button as="a" href="#">Filtrar</Button>
            </Bar>
            <Title>Personajes</Title>
            <CardContainer>
                {characters.filter((character) => {
                    if (searchTerm =="") {
                        return character
                    } else if (character.name.toLowerCase().includes(searchTerm.toLowerCase())){
                        return character
                    }
                }).map(character =>
                    <CharacterCard
                        character={character}
                    />
                )}
            </CardContainer>
        </div>
    )
}

export default CharacterList