import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';

import Alert from './components/layout/Alert';
import Login from './components/pages/Login';
import HomeLanding from './components/layout/landing/HomeLanding';
import LandingSide from './components/layout/landing/LandingSide';
import ClientDetail from './components/layout/client/ClientDetail';
import ClientMeasurement from './components/layout/client/ClientMeasurement';

import LjohnsonState from './context/ljohnson/LjohnsonState';
import AlertState from './context/alert/AlertState';

const App = () => {
  return (
    <LjohnsonState>
      <AlertState>
        <Router>
          <Alert />
          <Route path='/' component={LandingSide} />
          <Route exact path='/' component={HomeLanding} />
          <Switch>
            <Route exact path='/login' component={Login} />
            <Route exact path='/client' component={ClientDetail} />
            <Route
              exact
              path='/client/measurement'
              component={ClientMeasurement}
            />
          </Switch>
        </Router>
      </AlertState>
    </LjohnsonState>
  );
};

export default App;
