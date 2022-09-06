import React, { Component } from 'react';
import './ShowHide.less';

class ShowHide extends Component {
  constructor(props) {
    super(props);
    this.stats = {};
  }

  render() {
    return (
      <div>
        <h2>React控制元素显示隐藏的三种方法:</h2>
        <h4>方法一：</h4>
        <p>通过state变量来控制是否渲染元素，类似vue中的v-if。</p>
        <h4>方法二：</h4>
        <p>通过style控制display属性，类似vue 中的v-show。</p>
        <h4>方法三：</h4>
        <p>通过动态切换className</p>
      </div>
    );
  }
}

export default ShowHide;
