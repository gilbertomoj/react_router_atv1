import React from 'react';
import Home from './Pages/Home'
import Musica from './Pages/Musica';
import Cidade from './Pages/Cidade';

import { Switch, Route} from 'react-router-dom'


export const Routes = () => {
    return(
        <Switch>
        <Route path='/' component={Home}  exact/> 
        <Route path='/musica' component={Musica}  /> 
        <Route path='/cidade' component={Cidade}  /> 
        <Route component={()=> <div>Page 404</div>}/>
      </Switch>
    )
}