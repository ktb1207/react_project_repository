/**
 * 由于添加路由拦截，该路由暂时不用
 * */ 
import React, { Component } from 'react';
import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import AsyncLazyLoad from '../components/AsyncLazyLoad.js';
const Login = AsyncLazyLoad(() => import('../page/login/Login.js'));
const Home = AsyncLazyLoad(() => import('../page/home/Home.js'));
const About = AsyncLazyLoad(() => import('../page/about/About.js'));
const ErrorPage = AsyncLazyLoad(() => import('../page/error/Error.js'));

class RouterConfig extends Component {
  render() {
    return (
      <Router>
        <div className="root-router-page">
          <Switch>
            <Route exact path="/" component={Login}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/home" component={Home}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/error" component={ErrorPage}></Route>
            {/* 错误路由处理 */}
            <Redirect from="/*" to="/error"/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default RouterConfig;