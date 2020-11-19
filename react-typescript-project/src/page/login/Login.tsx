import React, { Component, ChangeEvent } from 'react';
import './login.scss';
import { Button } from 'antd-mobile';

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
  inputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    console.log(event);
    this.setState({
      inputValue: event.target.value
    });
  };
  render(): React.ReactElement {
    const buttonName: string | undefined = this.props.name;
    return (
      <div className="full-page login-page">
        <div className="content-center">
          <input type="text" value={this.state.inputValue} onChange={this.inputChange} />
          <Button type="primary">{buttonName}</Button>
        </div>
      </div>
    );
  }
}

export default Login;
