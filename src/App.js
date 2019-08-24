import React from 'react';
import {
  BrowserRouter as Router, Route, Link, Redirect,Switch,withRouter } from "react-router-dom";
import './App.css';

import Home from './page/Home.js';
import Me from './page/Me.js';

function App() {
  return (
    <Router>
        <Switch>
          <Redirect from="/" to="/home" />
          <Route path="/home" component={Home} />
          <Route path="/me" component={Me} />
        </Switch>
    </Router>
  );
}

export default App;
