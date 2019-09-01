import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Login from '../page/Login'
import News from '../page/News'
import Container from '../page/Container'
import NoFound from '../page/NoFound'

class RouterMap extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/' render={() =>(
            <Container>
              <Switch>
                <Route exact path='/' component={News} />
                <Route component={NoFound} />
              </Switch>
            </Container>
          )} />
        </Switch>
      </Router>
    )
  }
}

export default RouterMap
