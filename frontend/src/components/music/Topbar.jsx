import React,{ Component } from 'react'
import { Input, Menu, Modal } from 'antd';
import Login from './Login';

import './topbar.scss';

const { Search } = Input;

class Topbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 'find',
            loginVisible: false
        };
    }

    handleClick = e => {
        this.setState({
            current: e.key
        });
    }
    handleLogin = () => {
        this.setState({
            loginVisible: true
        });
    }
    handleCancel = e => {
        this.setState({
            visible: false,
        });
    };
    render() {
        
        return (
            <div id="top-bar">
                <Menu className="menu" onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                    <Menu.Item key="find">
                        发现音乐
                    </Menu.Item>
                    <Menu.Item key="rank">
                        排行榜
                    </Menu.Item>
                    <Menu.Item key="mine">
                        我的音乐
                    </Menu.Item>
                </Menu>
                <span className="user-name" onClick={this.handleLogin}>登录</span>
                <Search className="search-bar" size="large" placeholder="搜索音乐" onSearch={value => console.log(value)} enterButton />
                <Modal
                    visible={this.state.loginVisible}
                    onCancel={this.handleCancel}
                    footer={null}
                >
                    <Login />
                </Modal>
            </div>
        );
    }
}

export default Topbar;
