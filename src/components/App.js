import React from 'react';
import '../styles/main.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';


const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  </Router>
)

export default App;