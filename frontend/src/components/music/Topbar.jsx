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
        console.log(e);
        console.log(2);
        this.setState({
            loginVisible: false,
        });
    };
    updateVisible = value => {
        console.log(45);
        this.setState({
            loginVisible: value
        });
    }
    render() {
        
        return (
            <div id="top-bar">
                <Menu className="menu" onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                    <Menu.Item key="find">
                        Find Music
                    </Menu.Item>
                    <Menu.Item key="rank">
                        Ranking
                    </Menu.Item>
                    <Menu.Item key="mine">
                        My Music
                    </Menu.Item>
                </Menu>
                <span className="user-name" onClick={this.handleLogin}>Login</span>
                <Search className="search-bar" size="large" placeholder="Search" onSearch={value => console.log(value)} enterButton />
                <Modal
                    visible={this.state.loginVisible}
                    onCancel={this.handleCancel}
                    footer={null}
                >
                    <Login updateVisible={this.updateVisible}/>
                </Modal>
            </div>
        );
    }
}

export default Topbar;
