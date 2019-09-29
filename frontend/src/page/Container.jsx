import React, { Component } from 'react'
import { Layout } from 'antd';

import Navigator from "../components/navigator"

const { Content } = Layout;


export default class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Layout>
        <Navigator />
        <Layout>
          <Layout>
            <Content
              style={{
                background: '#fff',
                padding: 0,
                margin: 0
              }}
            >
              {this.props.children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}
