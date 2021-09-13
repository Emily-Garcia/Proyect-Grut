import CharacterDetailCard from "../../components/CharacterDetailCard"
import Navbar from "../../components/Navbar"


//Creamos la página que tendrá toda la información de un personaje en especifico
//Dentro de la página tenemos los componentes de navbar y el detalle del personaje
function CharacterDetail () {

    return (
        <div>
            <Navbar/>
            <CharacterDetailCard/>
        </div>
    )
}

export default CharacterDetail