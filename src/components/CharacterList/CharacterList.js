import axios from 'axios'
import { useEffect, useState } from 'react'
import React from 'react'
import CharacterCard from '../CharacterCard'
import { useHistory } from "react-router-dom";
import { Bar, Input, Button } from './FilterBarElements'
import { Title } from './CharacterListElements'
import "./CharacterList.css"
import { Link } from "react-router-dom"

const CharacterList = () => {

    //Creamos los variables
    //characters - es donde almacenaremos toda la información de todos los personajes
    //setCharacter - utilizaremos esta variable para setear informacion en la variable characters
    //searchTerm - en esta variable guardamos lo que el usuario escriba en el imput de la barra de búsqueda
    //setSearchTer - con esta marcamos todos los cambios que hay en la variable searchTerm
    //history - utilizamos esta variable para poder usar rutas dinámicas
    const [characters, setCharacter] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    let history = useHistory();

    //con esta función useEffect traemos todos los datos de la API
    useEffect (() => {
        axios.get('https://rickandmortyapi.com/api/character')
            .then(res => {
                const {results} = res.data
                //incorporamos todos los datos de los personajes en la variable character
                setCharacter(results)
            })
            .catch(error => console.log(error))
    }, [])


    //Esta función handleShowCharacterDetail la cual utilizamos para mandar al usuario al detalle del personaje que elija
    //La función recibirá el id del personaje
    const handleShowCharacterDetail = (id) => {
        history.push(`/characters/${id}`)
    }

    return (
        <div>
            <Bar>
                <Input type="text" placeholder="Personaje" onChange={(event) => {
                    setSearchTerm(event.target.value)
                }} />
                <Link to='/filter'><Button as="a" href="#">Filtrar</Button></Link>
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