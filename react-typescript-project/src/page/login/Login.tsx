import React, { Component } from 'react';
import './login.scss';
import { Button } from 'antd-mobile';
import MInput from '@/components/MInput/MInput';

interface IProps {
  name?: string;
}

interface IState {
  inputValue: string;
}
class Login extends Component<IProps, IState> {
  static defaultProps = {
    name: '登录'
  };

  constructor(props: IProps) {
    super(props);
    this.state = {
      inputValue: '我是初始化值'
    };
  }
  fieldChange = (value: string): void => {
    console.log('输入：' + value);
  };
  render(): React.ReactElement {
    const buttonName: string | undefined = this.props.name;
    return (
      <div className="full-page login-page">
        <div className="content-center">
          <MInput label="用户名" value="" placeHolder="用户名" change={this.fieldChange}></MInput>
          <MInput label="密码" type="password" value="" placeHolder="密码" change={this.fieldChange}></MInput>
          <Button type="primary">{buttonName}</Button>
        </div>
      </div>
    );
  }
}

export default Login;
