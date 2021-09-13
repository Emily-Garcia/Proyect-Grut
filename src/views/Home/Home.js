import CharacterList from '../../components/CharacterList'
import Navbar from '../../components/Navbar'

//Creamos la página principal, el cual contiene el componente del navbar y la lista de los personajes
const Home = () => {
    return(
        <div>
            <Navbar/>
            <CharacterList/>
        </div>
    )
}

export default Home