import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Home from './Pages/Home'
import Musica from './Pages/Musica';

import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Cidade from './Pages/Cidade';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' component={Home}  exact/> 
      <Route path='/musica' component={Musica}  /> 
      <Route path='/cidade' component={Cidade}  /> 
      <Route component={()=> <div>Page 404</div>}/>
    </Switch>
  </BrowserRouter>
  ,document.getElementById('root')
);


