import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu } from 'antd';
import { withRouter } from "react-router";

import './index.scss'

const { SubMenu } = Menu;
const { Header } = Layout;

class Navigator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const currenRootPath = this.props.location.pathname.split('/')[1];
    return (
        <Header id="navigator">
          <span className="title">Rico数据平台</span>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[currenRootPath ? currenRootPath : 'news']}
            className="menu"
          >
            <Menu.Item key="news">
              <Link to="/news">新闻聚合</Link>
            </Menu.Item>
            <Menu.Item key="comment">
              <Link to="/comment">评论分析</Link>
            </Menu.Item>
            <Menu.Item key="competition">
              <Link to="/competition">竞品分析</Link>
            </Menu.Item>
            <Menu.Item key="overview">
              <Link to="/overview">大盘分析</Link>
            </Menu.Item>
            <Menu.Item key="industry">
              <Link to="/industry">行业报告</Link>
            </Menu.Item>
          </Menu>
        </Header>
    );
  }
}

export default withRouter(Navigator);
