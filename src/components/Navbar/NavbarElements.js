import styled from "styled-components"

//Creamos un componente que es la Navbar y le damos estilo
export const Nav = styled.nav`
    background: #212d5e;
    display: flex;
    align-items: center;
    padding: 0.5rem calc((100vw - 1000px) /2);
    z-index: 10;
`

//Creamos el componente del título del navbar y le damos estilo
export const NavTitle = styled.div`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    margin: 5px;
`
