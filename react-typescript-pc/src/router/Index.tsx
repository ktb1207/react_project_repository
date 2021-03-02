import React, { Component, Suspense, Fragment } from 'react';
import { HashRouter as Router, Switch, Redirect } from 'react-router-dom';
import RouterAuth from './RouterAuth';
import routerMap from './routerMap';
import GenerateRoute from './test';

class RouterConfig extends Component {
  render(): React.ReactElement {
    return (
      <Fragment>
        <Suspense fallback={<div>Loading...</div>}>
          <Router>
            <Switch>
              {/* <RouterAuth routerConfig={routerMap}></RouterAuth> */}
              <GenerateRoute routerConfig={routerMap}></GenerateRoute>
            </Switch>
          </Router>
        </Suspense>
      </Fragment>
    );
  }
}

export default RouterConfig;
