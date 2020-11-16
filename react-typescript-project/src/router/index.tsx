import React, { Component, Suspense } from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

const Home = React.lazy(() => import('../page/home/Home'));
const About = React.lazy(() => import('../page/about/About'));
const ErrorPage = React.lazy(() => import('../page/error/Error'));

interface IProps {
  name?: string;
}
interface IState {
  num?: number;
}

class RouterConfig extends Component<IProps, IState> {
  render(): React.ReactElement {
    return (
      <Router>
        <div className="root-router-page">
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route path="/home" component={Home}></Route>
              <Route path="/about" component={About}></Route>
              <Route path="/error" component={ErrorPage}></Route>
              {/* 错误路由处理 */}
              <Redirect from="/*" to="/error" />
            </Switch>
          </Suspense>
        </div>
      </Router>
    );
  }
}

export default RouterConfig;
