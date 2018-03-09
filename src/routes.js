import React from 'react';
import {Route, Switch} from 'react-router-dom';
// import containers
import Home from './container/Home';
import Bins from './container/Bins';
import Edit from './container/Edit';
import CreateBin from './container/CreateBin';

export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/Shelf/:id' component={Bins} />
        <Route path='/BinEdit/:id' component={Edit} />
        <Route path='/BinCreate/:id' component={CreateBin} />
    </Switch>
)