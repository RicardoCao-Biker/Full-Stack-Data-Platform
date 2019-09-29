import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Login from '../page/Login';
import Container from '../page/Container';
import NoFound from '../page/NoFound';

import MusicIndex from '../page/Music/Index';
import InternationalNews from '../page/News/World';
import ChinaNews from '../page/News/China';

import routeInfo from '../utils/routeInfo';

const components = {
    MusicIndex,
    InternationalNews,
    ChinaNews
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
                <Redirect exact path="/" to="/music/index" />
                {
                    Object.entries(routeInfo).map(([routeTitle, routeItem]) => {
                        if (routeItem.child) {
                            return routeItem.child.map(childRoute => {
                                return (
                                    <Route path={childRoute.path} component={components[childRoute.component]} key={childRoute.path}/>
                                );
                            })
                        }
                        else {
                            return (
                                <Route path={routeItem.path} component={components[routeItem.component]} key={routeItem.path}/>
                            );
                        }
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

export default RouterMap;
