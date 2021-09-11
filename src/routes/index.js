import {Switch, Route} from 'react-router-dom'
import CharacterCard from '../components/CharacterCard'
import Home from '../views/Home'

function Routes() {
    return (
        <Switch>
            <Route path='/' component={Home}/>
            <Route render={() => <h1>Esta ruta no existe :(</h1>} />
        </Switch>
    )
}

export default Routes