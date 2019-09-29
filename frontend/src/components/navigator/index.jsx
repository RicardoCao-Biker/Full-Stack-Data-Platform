import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd';
import { withRouter } from "react-router";
import routeInfo from '../../utils/routeInfo'

import './index.scss'

const { SubMenu } = Menu;
const { Sider } = Layout;

class Navigator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const currenRootPath = this.props.location.pathname.split('/')[1];
    return (
        <Sider id="navigator">
          <div className="title"><em>Rico</em><span className="subtitle">platform</span></div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={[currenRootPath ? currenRootPath : 'news']}
            className="menu"
            // 使用一级路由和二级路由作为默认打开的索引
            defaultOpenKeys={[this.props.location.pathname.split('/')[1]]}
            defaultSelectedKeys={[this.props.location.pathname]}
          >
            {
            Object.entries(routeInfo).map(([routeTitle,routeItem]) => {
                return (
                  <SubMenu key={routeTitle} title={
                      <span>
                        <Icon type={routeItem.icon}></Icon>
                        <span>{routeItem.title}</span>
                      </span>
                    }>
                      {
                        routeItem.child.map(subItem => {
                          return (
                            <Menu.Item key={subItem.path}>
                              <Link to={subItem.path}>{subItem.name}</Link>
                            </Menu.Item>
                          );
                        })
                      }
                  </SubMenu>
                );
              })
            }
          </Menu>
        </Sider>
    );
  }
}

export default withRouter(Navigator);
