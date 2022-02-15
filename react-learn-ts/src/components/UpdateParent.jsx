import React from 'react';
import UpdateChildOne from './UpdateChildOne';

class UpdateParent extends React.Component {
  // 初始化挂载调用 -1
  constructor(props) {
    super(props);
    this.state = {
      clickNum: 1,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  // 在初始挂载和后续更新render方法调用之前，都会被调用 初始化挂载 -2 更新阶段 -1
  // props,state为更新后的参数
  // 必须返回一个对象来更新state
  static getDerivedStateFromProps(nextProps, nextState) {
    // console.log(nextProps);
    // console.log(nextState);
    return nextState;
  }
  // 初始化挂载 -4
  componentDidMount() {
    // console.log('mount');
  }
  // 更新阶段 -2
  // 默认返回true
  // 返回false则阻止更新阶段render componentDidUpdate执行, 也一并阻止子组件更新流程getDerivedStateFromProps，shouldComponentUpdate，render componentDidUpdate
  shouldComponentUpdate(nextProps, nextState) {
    // console.log(nextProps);
    // console.log(nextState);
    console.log('parent should update');
    if (nextState.clickNum === 3) {
      return false;
    }
    return true;
  }
  // 挂载不执行
  // 更新后立即调用
  componentDidUpdate(prevProps, prevState, shapshot) {
    // console.log('parent did update');
  }
  // + 1
  // state值不改变仍会触发shouldComponentUpdate，render componentDidUpdate等更新流程, 但是经过react diff 比对前后render 返回UI结构，不会执行DOM更新。
  // state值不改变，同样会触发子组件getDerivedStateFromProps，shouldComponentUpdate，render componentDidUpdate等更新流程。
  handleClick() {
    this.setState((state) => ({
      // clickNum: state.clickNum + 1,
      clickNum: state.clickNum,
    }));
  }
  // 初始化挂载 -3 更新 -3
  render() {
    // console.log('parent render runing');
    return (
      <div>
        <h2>一、组件更新流程分析</h2>
        <hr />
        <h3>这是父组件</h3>
        <div>
          <span>当前点击次数：{this.state.clickNum}</span>
          <button onClick={this.handleClick}>点击+1</button>
        </div>
        <UpdateChildOne clickNum={this.state.clickNum}></UpdateChildOne>
      </div>
    );
  }
}

export default UpdateParent;
