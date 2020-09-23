import React, { Component } from 'react';
import {HashRouter as Router, Switch } from 'react-router-dom';
import FrontendAuth from '../components/FrontendAuth.js';
import routerMap from './routerMap.js';
class RouterConfig extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <Router>
        <div className="root-router-page">
          <Switch>
            <FrontendAuth routerConfig={routerMap}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default RouterConfig;