import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import AsyncLazyLoad from './compontents/AsyncLazyLoad.js';

const Home = AsyncLazyLoad(() => import('./views/Home/Home.js'))
const About = AsyncLazyLoad(() => import('./views/About/About.js'))
const ErrorPage = AsyncLazyLoad(() => import('./views/About/About.js'))
// import Home from './views/Home/Home.js';
// import About from './views/About/About.js';
// import ErrorPage from './views/ErrorPage/ErrorPage.js';

class RouterConfig extends Component {
  render() {
    return (
      <Router>
        <div className="router-page">
          <Switch>
            <Route exact path="/" component={Home}></Route>
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