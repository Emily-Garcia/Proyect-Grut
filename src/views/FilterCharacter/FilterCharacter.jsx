import Navbar from "../../components/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css'
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap'
import {useState} from 'react'
import './FilterCharacter.css'
import back from '../../images/back.svg'
import { Link } from "react-router-dom"

//Creamos la página del filtro de los personajes
function FilterCharacter () {
    //Creamos las variables:
    //dropdown - es donde veremos si nuestro botón de opciones se ha presionado o no
    //setDropdown - con esto seteamos el valor de la variable dropdown
    //Repetimos estas dos variables cuatro veces, porque tendremos cuatro filtros
    const[dropdown, setDropdown] = useState(false)
    const[dropdown2, setDropdown2] = useState(false)
    const[dropdown3, setDropdown3] = useState(false)
    const[dropdown4, setDropdown4] = useState(false)

    //Creamos la función openDropdown, donde cambiaremos el valor de la variable dropDown cada que se de clic al botón de opciones
    //Repetimos la función cuatro veces, por los cuatro filtros
    const openDropdown = () => {
        setDropdown(!dropdown)
    }
    const openDropdown2 = () => {
        setDropdown2(!dropdown2)
    }
    const openDropdown3 = () => {
        setDropdown3(!dropdown3)
    }
    const openDropdown4 = () => {
        setDropdown4(!dropdown4)
    }

    return (
        <div>
            <Navbar/>
            <Link to='/characters' className="returnButton"><img alt="Return to Home" src={back} className="imgReturn"/></Link>
            <div className="dropContainer">
            <Dropdown isOpen={dropdown} toggle={openDropdown}>
                <DropdownToggle caret className="dropTitle">
                    Especie
                </DropdownToggle>
                <DropdownMenu className="dropItems">
                    <DropdownItem> Human </DropdownItem>
                    <DropdownItem> Alien </DropdownItem>
                </DropdownMenu>
            </Dropdown>
            </div>
            <div className="dropContainer">
            <Dropdown isOpen={dropdown2} toggle={openDropdown2}>
                <DropdownToggle caret className="dropTitle">
                    Estatus
                </DropdownToggle>
                <DropdownMenu className="dropItems">
                    <DropdownItem> Alive </DropdownItem>
                    <DropdownItem> Dead </DropdownItem>
                </DropdownMenu>
            </Dropdown>
            </div>
            <div className="dropContainer">
            <Dropdown isOpen={dropdown3} toggle={openDropdown3}>
                <DropdownToggle caret className="dropTitle">
                    Tipo
                </DropdownToggle>
                <DropdownMenu className="dropItems">
                    <DropdownItem> Genetic Experiment </DropdownItem>
                    <DropdownItem> Superhuman (Ghost trains summoner) </DropdownItem>
                    <DropdownItem> Parasite </DropdownItem>
                    <DropdownItem> Human with antennae </DropdownItem>
                    <DropdownItem> Human with ants in his eyes </DropdownItem>
                </DropdownMenu>
            </Dropdown>
            </div>
            <div className="dropContainer">
            <Dropdown isOpen={dropdown4} toggle={openDropdown4}>
                <DropdownToggle caret className="dropTitle">
                    Genero
                </DropdownToggle>
                <DropdownMenu className="dropItems">
                    <DropdownItem> Male </DropdownItem>
                    <DropdownItem> Female </DropdownItem>
                </DropdownMenu>
            </Dropdown>
            </div>
        </div>
    )
}

export default FilterCharacter