import React, { Component } from 'react'
import { Input, Icon, Button } from 'antd';

import './login.scss';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 'find',
            loginVisible: false
        };
    }
    handleSubmit = e => {
        e.preventDefault();
    };
    render() {

        return (
            <div id="music-login">
                <div className="wrapper">
                    <h3>网易云音乐账号</h3>
                </div>
                <div className="wrapper">
                    <span className="title">用户名</span>
                    <Input
                        className="input"
                        size="large"
                        placeholder="Enter your username"
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    />
                </div>
                <div className="wrapper">
                    <span className="title">密 码</span>
                    <Input
                        className="input"
                        size="large"
                        type="password"
                        placeholder="Enter your password"
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    />
                </div>
                <div className="submit">
                    <Button type="primary" shape="round" size="large">登录</Button>
                </div>
            </div>
        );
    }
}

export default Login;
