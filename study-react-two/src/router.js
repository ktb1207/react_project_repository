import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import './router.less';

import Home from './views/home/HomePage';
import LoginPage from './views/login/Login';
import About from './views/about/About';

class RouterConfig extends Component {
  render() {
    return (
      <Router>
        <div className="Router-page">
          <Switch>
            <Route exact path="/" component={LoginPage}></Route>
            <Route path="/home" component={Home}></Route>
            <Route path="/login" component={LoginPage}></Route>
            <Route path="/about" exact strict component={About}></Route>
            {/* 错误路由处理 */}
            <Redirect from="/*" to="/" />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default RouterConfig;
