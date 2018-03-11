import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import containers
// import Home from './components/Home/Home';
// import Bins from './components/Bins/Bins';
// import BinAdd from './components/BinAdd/BinAdd';
// ////
// import Edit from './container/Edit';
// import Create from './container/Create';
import Home from './components/Home/Home';
import Shelf from './components/Shelf/Shelf';
import BinEdit from './components/BinEdit/BinEdit';

export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/Shelf/:id/:bin_id' component={BinEdit} />
        <Route path='/Shelf/:id' component={Shelf} />
        {/* <Route exact path='/' component={Home} />
        <Route path='/Shelf/:id/add/:bin_id' component={BinAdd}/>
        <Route path='/Shelf/:id' component={Bins} />
        <Route path='/BinEdit/:id' component={Edit} />
        <Route path='/BinCreate/:shelf_id/:bin_slot' component={Create} /> */}
    </Switch>
)