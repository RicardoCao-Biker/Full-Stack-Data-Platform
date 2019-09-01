import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Login from '../page/Login'
import China from '../page/News/China'
import World from '../page/News/World'
import All from '../page/Comment/All'
import Baidu from '../page/Comment/Baidu'
import Huawei from '../page/Comment/Huawei'
import Tencent from '../page/Comment/Tencent'
import Xiaomi from '../page/Comment/Xiaomi'
import Container from '../page/Container'
import NoFound from '../page/NoFound'

import routeInfo from '../utils/routeInfo'

const components = {
  China, World, All, Baidu, Huawei, Tencent, Xiaomi
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
                {
                  Object.entries(routeInfo).map(([p,r],index1) => {              
                    return (
                      <Route key={`${index1}`} render={() => (
                        <Redirect exact path={`/${p}`} to={`/${p}/${r[0] ? r[0].path : ''}`} />
                        {
                          r.map((i, index2) => (
                            <Route path={`/${p}/${i.path}`} key={`${index1}${index2}`} component={components[i.component]} />
                          ))
                        }
                      )}/>
                    )
                  })
                }
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
