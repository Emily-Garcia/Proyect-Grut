import {Switch, Route} from 'react-router-dom'
import Home from '../views/Home'
import CharacterDetail from '../views/CharacterDetail'

function Routes() {
    return (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/characters' component={Home}/>
            <Route exact path='/characters/:characterId' component={CharacterDetail}/>
        </Switch>
    )
}

export default Routes