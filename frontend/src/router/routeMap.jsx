import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Login from '../page/Login'
import Container from '../page/Container'
import NoFound from '../page/NoFound'

import routeInfo from '../utils/routeInfo'

const components = {

};

class RouterMap extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/' render={() => (
            <Container>
              <Switch>
                <Redirect exact path="/" to="/news" />
                
                <Route component={NoFound} />
              </Switch>
            </Container>
          )} />
        </Switch>
      </Router>
    )
  }
}

export default RouterMap;
