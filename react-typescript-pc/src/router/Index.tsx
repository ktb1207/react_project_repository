import React, { Component, Suspense, Fragment } from 'react';
import { HashRouter as Router, Switch } from 'react-router-dom';
import RouterAuth from './RouterAuth';
import routerMap from './routerMap';

class RouterConfig extends Component {
  render(): React.ReactElement {
    return (
      <Router>
        <Fragment>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <RouterAuth routerConfig={routerMap}></RouterAuth>
            </Switch>
          </Suspense>
        </Fragment>
      </Router>
    );
  }
}

export default RouterConfig;
