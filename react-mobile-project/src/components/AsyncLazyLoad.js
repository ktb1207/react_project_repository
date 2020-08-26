import React, { Component } from 'react';

export default function AsyncLazyLoad (componentfn) {
  class LazyLoadComponent extends Component {
    constructor (props) {
      super(props)
      this.state = {
        component:null
      }
    }

    async componentDidMount () {
      const {default: component} = await componentfn();
      this.setState({component})
    }
    render() {
      const C = this.state.component;
      return C ? <C {...this.props}/> : null;
    }
  }
  return LazyLoadComponent;
}