import React from 'react';

class UpdateChildOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: props.clickNum,
    };
  }
  // 内部无法访问this
  static getDerivedStateFromProps(nextProps, nextState) {
    // 依据props修改state
    return {
      num: nextProps.clickNum,
    };
    // return nextState;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('child one should update');
    return true;
  }

  render() {
    return (
      <div>
        <h3>这是子组件1</h3>
        <p>当前props次数：{this.state.num}</p>
      </div>
    );
  }
}

export default UpdateChildOne;
