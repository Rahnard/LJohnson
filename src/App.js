import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Alert from './components/layout/alert/Alert';
import Home from './components/pages/Home';
import Login from './components/pages/Login';

import ClientMeasurement from './components/client/ClientMeasurement';
import ClientDetail from './components/client/ClientDetail';

import LjohnsonState from './context/ljohnson/LjohnsonState';
import AlertState from './context/alert/AlertState';
import LandingSide from './components/landing/LandingSide';

const App = () => {
  return (
    <LjohnsonState>
      <AlertState>
        <Router>
          <Alert />
          <Route exact path='/' component={Home} />
          <Switch>
            <Route exact path='/login' component={Login} />
            <Route
              exact
              path='/client'
              render={props => (
                <div>
                  <LandingSide />
                  <ClientDetail />
                  <ClientMeasurement />
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
