import React, { Component, Suspense } from 'react';
import { HashRouter as Router, Switch } from 'react-router-dom';
import RouterAuth from './RouterAuth';
import routerMap from './routerMap';

// const Home = React.lazy(() => import('../page/home/Home'));
// const About = React.lazy(() => import('../page/about/About'));
// const ErrorPage = React.lazy(() => import('../page/error/Error'));
class RouterConfig extends Component {
  render(): React.ReactElement {
    return (
      <Router>
        <div className="root-router-page">
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <RouterAuth routerConfig={routerMap}></RouterAuth>
              {/* <Route exact path="/" component={Home}></Route>
              <Route path="/home" component={Home}></Route>
              <Route path="/about" component={About}></Route>
              <Route path="/error" component={ErrorPage}></Route> */}
              {/* 错误路由处理 */}
              {/* <Redirect from="/*" to="/error" /> */}
            </Switch>
          </Suspense>
        </div>
      </Router>
    );
  }
}

export default RouterConfig;
