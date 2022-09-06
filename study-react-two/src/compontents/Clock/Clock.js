import React, { Component } from 'react';
import './Clock.less';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: new Date()
    };
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    this.setState({
      data: new Date()
    });
  }

  render() {
    return (
      <div className="clock-wrp">
        <h2 cyme="hello-h">现在时间是：</h2>
        <h3>{this.state.data.toLocaleString()}</h3>
      </div>
    );
  }
}

export default Clock;
