import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Menu from './components/Menu';
import { Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Dish from './components/Dish';
import NoMatch from './components/NoMatch';

const App = () => (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/menu" component={Menu} />
      <Route path="/menus/:id" component={Dish} />
      <Route component={NoMatch} />
    </Switch>
  </div>
);

export default App;
