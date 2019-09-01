import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom'
import routeInfo from '../../utils/routeInfo'

import './index.scss';

const { SubMenu } = Menu;
const { Sider } = Layout;


export default class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // console.log(window.location.pathname);
    // console.log(routeInfo);
  }

  render() {
    const path = window.location.pathname.split('/');
    return (
      <Sider width={200} id="sider" style={{height: 'calc( 100vh - 64px)'}}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        > 
          {path[1] ? routeInfo[path[1]].map(p => (
            <Menu.Item key={p.path}><Link to={`/${path[1]}/${p.path}`}>{p.name}</Link></Menu.Item>
          )) : null}
        </Menu>
      </Sider>
    );
  }
}
