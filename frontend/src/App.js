import React, { Component }from 'react';
import {
  BrowserRouter as Router, Route, Link, Redirect, Switch, withRouter, HashRouter } from "react-router-dom";
import './App.css';

import { Provider } from 'react-redux';

import Home from './page/Home.js';
import Me from './page/Me.js';
import NoMatch from './page/NoMatch.js';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/me" component={Me}/>
          <Route component={NoMatch} />
          {/* <Redirect from="/" to="/home" /> */}
        </Switch>
      </Router>
    )
  }
}
// function App() {
//   return (
//     <HashRouter>
//       <p>test</p>
//       <Switch>
//         <Redirect from="/" to="/home" />
//         <Route path="/home" component={Home} s/>
//         <Route path="/me" component={Me} />
//       </Switch>
//     </HashRouter>
//   );
// }

export default App;
