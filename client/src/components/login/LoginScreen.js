
import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';


import Login from './Login.js';
import Register from './Register.js';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      loginscreen: [],
      loginmessage: '',
      buttonLabel: 'Register',
      isLogin: true,
    };
  }
  componentDidMount() {
    var loginscreen = [];
    loginscreen.push(
      <Login parentContext={this} appContext={this.props.parentContext} />
    );
    var loginmessage = 'Not registered yet. Please register now';
    this.setState({
      loginscreen: loginscreen,
      loginmessage: loginmessage,
    });
  }

  handleClick() {
    var loginmessage;
    if (this.state.isLogin) {
      var loginscreen = [];
      loginscreen.push(<Register parentContext={this} />);
      loginmessage = 'Already registered, please Login';
      this.setState({
        loginscreen: loginscreen,
        loginmessage: loginmessage,
        buttonLabel: 'Login',
        isaLogin: false,
      });
    } else {
      loginscreen.push(<Login parentContext={this} />);
      loginmessage = 'NOt registered yet. Please go to Registration';
      this.setState({
        loginscreen: loginscreen,
        loginmessage: loginmessage,
        buttonLabel: 'Register',
        isLogin: true,
      });
    }
  }

  render() {
    return (
      <div className="loginscreen">
        {this.state.loginscreen}
        <div>
          {this.state.loginmessage}
          <div>
            <RaisedButton
              label={this.state.buttonLabel}
              primary={true}
              style={style}
              onClick={event => this.handleClick(event)}
            />
          </div>
        </div>
      </div>
    );
  }
}
const style = {
  margin: 15,
};

export default LoginScreen;
