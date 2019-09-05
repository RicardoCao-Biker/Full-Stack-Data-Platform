import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd';
import { withRouter } from "react-router";
import { Link } from 'react-router-dom'
import routeInfo from '../../utils/routeInfo'

import './index.scss';

const { Sider } = Layout;


class Container extends Component {
  render() {
    console.log(this.props);
    const path = this.props.location.pathname.split('/');
    return (
      <Sider width={160} id="sider">
        <Menu
          mode="inline"
          selectedKeys={[this.props.location.pathname]}
        > 
          {path[1] ? routeInfo[path[1]].map(p => (
            <Menu.Item key={`/${path[1]}/${p.path}`}><Link to={`/${path[1]}/${p.path}`}>{p.name}</Link></Menu.Item>
          )) : null}
        </Menu>
      </Sider>
    );
  }
}

export default withRouter(Container);
