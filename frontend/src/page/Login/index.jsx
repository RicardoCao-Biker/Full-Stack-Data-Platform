import React from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Snackbar from '@material-ui/core/Snackbar';


import "./index.scss"

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      noticeOpen: false
    }
  }
  componentDidMount() {

  }

  handleChange = (e) => {
    let inputValue = e.target.value,
      inputName = e.target.name;
    this.setState({
      [inputName]: inputValue
    });
  }

  login = (e) => {
    this.setState({ noticeOpen: true });
    setTimeout(() => {
      this.setState({ noticeOpen: false });
    }, 1000);
  }

  render(){ 
    return (
      <div id="login">
        <Container component = "main" maxWidth = "xs" >
          <div className="login-form">
            <center className="title">RICO 数据平台</center>
            <form noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={this.handleChange}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={this.handleChange}
              />
              <Button
                fullWidth
                variant="contained"
                color="primary"
                size="large"
                onClick={this.login}
              >
                登录
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    忘记密码？
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    注册
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Container>
        <Snackbar
          anchorOrigin={{vertical: 'top', horizontal: 'center'}}
          open={this.state.noticeOpen}
          message={<span>登录中</span>}
        />
      </div>
    )
  }
}