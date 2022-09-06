import React, { Component } from 'react';
import NProgress from 'nprogress';
export default function AsyncLazyLoad(componentfn) {
  class LazyLoadComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        component: null,
      };
    }
    async componentDidMount() {
      NProgress.start();
      const { default: component } = await componentfn();
      this.setState({ component });
      NProgress.done();
    }
    render() {
      const C = this.state.component;
      return C ? <C {...this.props} /> : null;
    }
  }
  return LazyLoadComponent;
}
