import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Route, Switch, NavLink, Redirect } from 'react-router-dom';
// import { TransitionGroup, CSSTransition } from "react-transition-group";
import './home.less';
import logo from '../../logo.svg';

import BasePage from '../basePage/BasePage';
import StepPage from '../stepPage/StepPage';
import HeightPage from '../heightPage/HeightPage';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.match = this.props.match;
    this.history = this.props.history;
  }
  componentWillMount() {
    // console.log(this.props)
  }

  // 注销登录
  layoutLogin = event => {
    this.history.push('/login');
  };

  render() {
    return (
      <div className="home-wrp">
        <header className="home-header">
          <div className="header-link">
            <ul>
              <li>
                <NavLink to="/home" exact activeClassName="active-router-style">
                  基础
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/home/step"
                  exact
                  activeClassName="active-router-style"
                >
                  进阶
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/home/hight"
                  exact
                  activeClassName="active-router-style"
                >
                  高级探索
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="header-logo" onClick={this.layoutLogin}>
            <img src={logo} className="home-logo" alt="logo" />
          </div>
        </header>
        <div className="home-content">
          <Switch>
            <Route
              exact
              path={this.match.path}
              render={props => {
                return <BasePage {...props}></BasePage>;
              }}
            ></Route>
            <Route
              path={`${this.match.path}/step`}
              render={props => {
                return <StepPage {...props}></StepPage>;
              }}
            ></Route>
            <Route
              path={`${this.match.path}/hight`}
              component={HeightPage}
            ></Route>
            {/* 错误路由处理 */}
            <Redirect from="/*" to="/home" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(Home);
