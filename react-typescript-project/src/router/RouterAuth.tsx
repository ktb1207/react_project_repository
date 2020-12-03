import React, { Component } from 'react';
import { Route, Redirect, withRouter, RouteComponentProps } from 'react-router-dom';

interface IRoute {
  path: string;
  name: string;
  component: React.LazyExoticComponent<any>;
  auth: boolean;
  children?: Array<any>;
}
export interface IProps extends RouteComponentProps {
  routerConfig: Array<IRoute>;
}

class RouterAuth extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  render(): React.ReactElement {
    const { routerConfig, location } = this.props;
    const { pathname } = location;
    const isLogin: string | null = localStorage.getItem('mobile_token');
    const targetRouterConfig = routerConfig.find((item) => {
      if (!item.children) {
        // 参数路由
        if (item.path.includes(':')) {
          return item.path.split('/')[1] === pathname.split('/')[1];
        }
        // 非参数路由
        return item.path === pathname;
      } else {
        return pathname.includes(item.path) === true;
      }
    });
    // 非登录状态，该路由不用进行权限校验
    if (targetRouterConfig && !targetRouterConfig.auth && !isLogin) {
      const { component } = targetRouterConfig;
      return <Route exact path={pathname} component={component} />;
    }
    if (isLogin) {
      // 登录状态，想要跳转登录页，重定向到主页
      if (pathname === '/login') {
        return <Redirect to="/home" />;
      } else {
        // 如果路由合法，跳转到对应路由
        if (targetRouterConfig) {
          // 根路由重定向home
          if (pathname === '/') {
            return <Redirect to="/home" />;
          } else {
            if (targetRouterConfig.children && targetRouterConfig.children.length > 0) {
              return <Route path={pathname} component={targetRouterConfig.component} />;
            }
            return <Route exact path={pathname} component={targetRouterConfig.component} />;
          }
        } else {
          // 如果路由不合法，重定向到 404 页面
          return <Redirect to="/errorPage" />;
        }
      }
    } else {
      // 非登录状态下，路由合法且需要权限校验，跳转到登录页
      if (targetRouterConfig && targetRouterConfig.auth) {
        return <Redirect to="/login" />;
      } else {
        // 非登陆状态下，路由不合法时，重定向至 404
        return <Redirect to="/errorPage" />;
      }
    }
  }
}

export default withRouter(RouterAuth);
