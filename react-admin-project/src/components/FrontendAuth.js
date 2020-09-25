import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import util from '../utils/utils.js';
class FrontendAuth extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const { routerConfig, location } = this.props;
    const { pathname } = location;
    const isLogin = util.getToken();
    // 查找路由项
    const targetRouterConfig = routerConfig.find(
      (item) => {
        if (!item.children) {
          return item.path === pathname
        } else {
          return pathname.includes(item.path) === true;
        }
      }
    );
    console.log('匹配路由项：')
    console.log(targetRouterConfig)
    // 如果该路由不用进行权限校验
    if (targetRouterConfig && !targetRouterConfig.auth && !isLogin) {
      const { component } = targetRouterConfig;
      console.log(targetRouterConfig)
      return <Route exact path={pathname} component={component} />;
    }

    if (isLogin) {
      // 如果是登陆状态，想要跳转到登陆，重定向到登录主页
      if (pathname === "/login" || pathname === '/') {
        return <Redirect to="/home" />;
      } else {
        // 如果路由合法，就跳转到相应的路由
        if (targetRouterConfig) {
          return (
            <Route path={pathname} component={targetRouterConfig.component} />
          );
        } else {
          // 如果路由不合法，重定向到 error 页面
          return <Redirect to="/error" />;
        }
      }
    } else {
      // 非登陆状态下，当路由合法时且需要权限校验时，跳转到登陆页面，要求登陆
      if (targetRouterConfig && targetRouterConfig.auth) {
        return <Redirect to="/login" />;
      } else {
        // 非登陆状态下，路由不合法时，重定向至 error
        return <Redirect to="/error" />;
      }
    }
  }
}

export default FrontendAuth;