import React from 'react';
import { observer, inject } from 'mobx-react';
import { TimerStoreType } from '../../mobxStore/index';
interface IProps {
  timerStore?: TimerStoreType;
}
interface IState {}
// class组件装饰器使用
// @inject('timerStore')
// @observer
class ClassPage extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.addMobx = this.addMobx.bind(this);
    this.resetMobx = this.resetMobx.bind(this);
    this.state = {};
  }
  addMobx() {
    this.props.timerStore?.addTimer();
  }
  resetMobx() {
    this.props.timerStore?.resetTimer();
  }
  render() {
    const { timerStore } = this.props;
    return (
      <div>
        <p>当前timer值：{timerStore?.timer}</p>
        <button onClick={this.addMobx}>mobx值+1</button>
        <button onClick={this.resetMobx}>重置</button>
      </div>
    );
  }
}
// class组件装饰器使用
// export default ClassPage;
// class组件函数使用
export default inject('timerStore')(observer(ClassPage));
