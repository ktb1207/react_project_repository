import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Button } from 'antd-mobile';
import MInput from '@/components/MInput/MInput';
import { showLoading, hideLoading } from '../../store/action';
import api from '../../api/index';
import './login.scss';

interface IProps {
  name?: string;
  loadingStatus: boolean;
  onLoadingShow: () => void;
  onLoadingHide: () => void;
  history: any;
  location: any;
  match: any;
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
  // 输入值
  fieldChange = (value: string): void => {
    console.log('输入：' + value);
  };
  // 登录
  loginMethod = (): void => {
    try {
      api.testGet().then((res) => {
        console.log(res);
      });
    } catch (err) {
      console.log(err);
    }
    this.props.onLoadingShow();
    setTimeout(() => {
      this.props.onLoadingHide();
    }, 3000);
  };
  // 注册
  registerClick = (): void => {
    this.props.history.push('/register');
  };
  shouldComponentUpdate(nextProps: any): boolean {
    if (nextProps.loadingStatus === this.props.loadingStatus) {
      return false;
    }
    return true;
  }
  render(): React.ReactElement {
    console.log(this.props);
    const buttonName: string | undefined = this.props.name;
    return (
      <div className="full-page login-page">
        <div className="content-center">
          <MInput label="用户名" value="" placeHolder="用户名" change={this.fieldChange}></MInput>
          <MInput label="密码" type="password" value="" placeHolder="密码" change={this.fieldChange}></MInput>
          <Button type="primary" onClick={this.loginMethod}>
            {buttonName}
          </Button>
          <p className="register" onClick={this.registerClick}>
            注册
          </p>
        </div>
      </div>
    );
  }
}

// 将reducer中的状态插入到组件的prop中
const mapStateToProps = (state: { loadingState: boolean }): { loadingStatus: boolean } => {
  return {
    loadingStatus: state.loadingState
  };
};

// 将对应的action插入到组件props
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onLoadingShow: () => dispatch(showLoading()),
    onLoadingHide: () => dispatch(hideLoading())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
