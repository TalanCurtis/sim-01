import React from 'react';
import { Route, Switch } from 'react-router-dom';
//
import Home from './components/Home/Home';
import Shelf from './components/Shelf/Shelf';
import BinEdit from './components/BinEdit/BinEdit';
import BinAdd from './components/BinAdd/BinAdd';

export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/Shelf/:id/add/:bin_id' component={BinAdd} />
        <Route path='/Shelf/:id/:bin_id' component={BinEdit} />
        <Route path='/Shelf/:id' component={Shelf} />
    </Switch>
)