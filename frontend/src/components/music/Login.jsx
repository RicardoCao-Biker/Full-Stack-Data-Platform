import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Checkbox, notification} from 'antd';
import TextField from '@material-ui/core/TextField';

import './login.scss';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 'find',
            loginVisible: false,
            remember: false,
            username: '',
            password: ''
        };
    }
    componentWillMount = ()=>{
        if(localStorage.getItem('m')){
            const local = JSON.parse(localStorage.getItem('m'));
            console.log(local);
            this.setState({
                username: local.username,
                password: local.password,
                remember: true
            })
        }
    }

    onRemeberChange = e => {
        this.setState({
            remember: e.target.checked
        })
        if (!e.target.checked) {
            localStorage.removeItem('m');
        }
    }

    login = e => {
        if(this.state.remember) {
            localStorage.setItem('m',JSON.stringify({
                username: this.state.username,
                password: this.state.password
            }))
        }
        this.$axios.get(this.$api.login,{
            params: {
                phone: this.state.username,
                password: this.state.password
            }
        }).then(res=>{
            if(res.data.code !== 200) {
                notification['warning']({
                    message: 'Login Failed',
                    description:'Try later plaase'
                });
                return;
            }
            notification['success']({
                message: 'Login Success'
            });
            this.props.updateVisible(false);
            this.props.updateUser({
                nickName: res.data.profile.nickname,
                avatarUrl: res.data.profile.avatarUrl,
                userId: res.data.profile.userId
            });
        })
    }
    render() {

        return (
            <div id="music-login">
                <div className="wrapper">
                    <img src={require("../../static/music-icon.jpeg")} /> 
                </div>
                <div className="wrapper">
                    <TextField
                        id="standard-name"
                        label="Username"
                        fullWidth
                        value={this.state.username}
                        onChange={(e) => {
                            this.setState({
                                username: e.target.value
                            });
                        }}
                        margin="normal"
                    />
                </div>
                <div className="wrapper">
                    <TextField
                        id="standard-name"
                        label="Password"
                        fullWidth
                        type="password"
                        value={this.state.password}
                        onChange={(e) => {
                            this.setState({
                                password: e.target.value
                            });
                        }}
                        margin="normal"
                    />
                </div>
                <div className="wrapper">
                    <Checkbox onChange={this.onRemeberChange} checked={this.state.remember}>Remember me</Checkbox>
                </div>
                <div className="submit">
                    <Button size="large" type="primary" block onClick={this.login}>Login</Button>
                </div>
                <p>{this.props.nickName}</p>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        nickName: state.musicReducer.nickName
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateUser: userInfo => {
            dispatch({
                type: 'musicAction',
                userInfo
            });
        }
    }
}

const LoginCom = connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)

export default LoginCom;
