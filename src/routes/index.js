import {Switch, Route} from 'react-router-dom'
import Home from '../views/Home'
import CharacterDetail from '../views/CharacterDetail'
import FilterCharacter from '../views/FilterCharacter'

//Creamos esta función para poder crear rutas hacia las diferentes páginas y rutas dinámicas
function Routes() {
    return (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/characters' component={Home}/>
            <Route exact path='/characters/:characterId' component={CharacterDetail}/>
            <Route exact path="/filter" component={FilterCharacter}/>
        </Switch>
    )
}

export default Routes