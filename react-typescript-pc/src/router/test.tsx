/**
 *
 * 未登录
 * 返回不需要登录页面
 *
 * 已登录
 * 返回全部页面
 * */
import React, { Component } from 'react';
import { Route, Redirect, withRouter, RouteComponentProps } from 'react-router-dom';

export type IRoute = {
  path: string;
  name: string;
  component: React.LazyExoticComponent<any>;
  auth: boolean;
  meta: {
    title: string;
  };
  /*子路由*/
  children?: Array<IRoute>;
  /*路由参数*/
  params?: Array<string>;
  /*子路由分类*/
  childClassify?: number;
};

interface IProps {
  routerConfig: Array<IRoute>;
}

interface IState {
  loginStatus: boolean;
}

class GenerateRoute extends Component<IProps, IState> {
  readonly state: IState;
  constructor(props: IProps) {
    super(props);
    this.state = {
      loginStatus: true
    };
  }
  public shouldComponentUpdate(nextProps: IProps): boolean {
    return nextProps.routerConfig.length !== this.props.routerConfig.length;
  }
  public render(): React.ReactElement {
    const filterArr = this.state.loginStatus
      ? this.props.routerConfig
      : this.props.routerConfig.filter((item: IRoute) => {
          return item.auth === false;
        });
    const routerMap = filterArr.map((item: IRoute) => {
      return <Route key={item.path} exact={item.children === undefined} path={item.path} component={item.component} />;
    });
    routerMap.push(<Redirect to="/errorPage" key="/errorRedirect"></Redirect>);
    console.log(routerMap.length);
    return (
      <>
        {routerMap}
        {/* <Redirect to="/errorPage"></Redirect> */}
      </>
    );
  }
}

export default GenerateRoute;
