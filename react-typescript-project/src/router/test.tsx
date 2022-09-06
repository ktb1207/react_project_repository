/**
 *
 * 未登录
 * 返回不需要登录页面
 *
 * 已登录
 * 返回全部页面
 * */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, Switch } from 'react-router-dom';
import { IStore } from '@/store/reducer';

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
  loginStatus: boolean;
}

interface IState {}

class GenerateRoute extends Component<IProps, IState> {
  readonly state: IState;
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }
  public shouldComponentUpdate(nextProps: IProps): boolean {
    return (
      nextProps.routerConfig.length !== this.props.routerConfig.length ||
      nextProps.loginStatus !== this.props.loginStatus
    );
  }
  public render(): React.ReactElement {
    // const filterArr = this.props.loginStatus
    //   ? this.props.routerConfig
    //   : this.props.routerConfig.filter((item: IRoute) => {
    //       return item.auth === false;
    //     });
    const filterArr = this.props.routerConfig;
    const routerMap = filterArr.map((item: IRoute) => {
      if (item.auth) {
        const TestPage = item.component;
        return (
          <Route
            key={item.path}
            exact={item.children === undefined}
            path={item.path}
            render={() => {
              return this.props.loginStatus ? <TestPage /> : <Redirect to="/login"></Redirect>;
            }}
          />
        );
      }
      return <Route key={item.path} exact={item.children === undefined} path={item.path} component={item.component} />;
    });
    return (
      <Switch>
        {routerMap}
        {/* 路由匹配错误处理 */}
        <Redirect to="/errorPage"></Redirect>
      </Switch>
    );
  }
}

// 将reducer中的状态插入到组件的prop中
const mapStateToProps = (state: IStore): { loginStatus: boolean } => {
  return {
    loginStatus: state.loginStatus
  };
};

export default connect(mapStateToProps)(GenerateRoute);
