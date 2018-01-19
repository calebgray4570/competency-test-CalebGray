import React, { Component } from 'react';
// import { connect } from 'react-redux';
import {Route, HashRouter, Switch } from 'react-router-dom';

import Home from './comps/Home/Home'
import Contact from './comps/Contact/Contact'

import './App.css';

class App extends Component {
  render() {
    return (
      
      <HashRouter>
         <div className="App">
          <Switch>

            <Route exact path='/' component={Home}/>
            <Route exact path='/contact' component={ Contact }/>

          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
