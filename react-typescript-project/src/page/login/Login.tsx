import React, { Component } from 'react';
import './login.scss';
import { Button } from 'antd-mobile';
class Login extends Component {
  render(): React.ReactElement {
    return (
      <div className="full-page login-page">
        <div className="content-center">
          <Button type="primary">login</Button>
        </div>
      </div>
    );
  }
}

export default Login;
