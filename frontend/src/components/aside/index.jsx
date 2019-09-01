import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd';

import './index.scss';

const { SubMenu } = Menu;
const { Sider } = Layout;


export default class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.asideRoute = {
      'news': [{
        name: '国内新闻',
        path: 'china'
      }, {
        name: '国外新闻',
        path: 'world'
      }],
      'comment': [],
      'competition': [],
      'overview': [],
      'industry': []
    };
  }

  render() {
    return (
      <Sider width={200} id="sider" style={{height: 'calc( 100vh - 64px)'}}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <Menu.Item key="1">option1</Menu.Item>
          <Menu.Item key="2">option2</Menu.Item>
          <Menu.Item key="3">option3</Menu.Item>
          <Menu.Item key="4">option4</Menu.Item>
        </Menu>
      </Sider>
    );
  }
}
