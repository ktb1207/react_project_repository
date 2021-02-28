import React, { Component, Suspense, Fragment } from 'react';
import { HashRouter as Router, Switch, Redirect } from 'react-router-dom';
import RouterAuth from './RouterAuth';
import routerMap from './routerMap';

class RouterConfig extends Component {
  render(): React.ReactElement {
    console.log(<RouterAuth routerConfig={routerMap}></RouterAuth>);
    return (
      <Fragment>
        <Suspense fallback={<div>Loading...</div>}>
          <Router>
            <Switch>
              <RouterAuth routerConfig={routerMap}></RouterAuth>
            </Switch>
          </Router>
        </Suspense>
      </Fragment>
    );
  }
}

export default RouterConfig;
