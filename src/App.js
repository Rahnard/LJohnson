import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Alert from './components/layout/Alert';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Client from './components/viewClient/Client';
import AddClient from './components/client/AddClient';

// context imports
import LjohnsonState from './context/ljohnson/LjohnsonState';
import AlertState from './context/alert/AlertState';
import LandingSide from './components/landing/LandingSide';

const App = () => {
  return (
    <LjohnsonState>
      <AlertState>
        <Router>
          <Alert />
          <AddClient />
          <Route exact path='/' component={Home} />
          {/* <Route exact path='/' component={AddClient} /> */}
          <Switch>
            <Route exact path='/login' component={Login} />
            <Route
              exact
              path='/client'
              render={props => (
                <div>
                  <LandingSide />
                  <Client />
                </div>
              )}
            />
          </Switch>
        </Router>
      </AlertState>
    </LjohnsonState>
  );
};

export default App;
