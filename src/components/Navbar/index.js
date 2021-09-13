import React from 'react'
import {Nav, NavTitle} from './NavbarElements'
import rick from '../../images/rick.svg'
import morty from '../../images/morty.svg'

//Creamos un componente Navbar que tendrá los componentes Nav y NavTitle
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavTitle>
                    <img src={rick} alt='RICK' />
                    <h1>RICK AND MORTY</h1>
                    <img src={morty} alt='MORTY' />
                </NavTitle>
            </Nav>
        </>
    )
}

export default Navbar