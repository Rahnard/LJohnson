import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Alert from './components/layout/Alert';
import Home from './components/pages/Home';
import Landing from './components/layout/landing/Landing';

import LjohnsonState from './context/ljohnson/LjohnsonState';
import AlertState from './context/alert/AlertState';

const App = () => {
  return (
    <LjohnsonState>
      <AlertState>
        <Router>
          <Alert />
          <Switch>
            <Home />
            <Landing />
          </Switch>
        </Router>
      </AlertState>
    </LjohnsonState>
  );
};

export default App;
