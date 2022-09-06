import React, {Component} from 'react';
import './TransmitData.less';

class TransmitData extends Component {
  constructor (props) {
    super (props);
    this.state = {};
  }

  render () {
    return (
      <div>
        <h2>一、父组件向子组件传值</h2>
        <p>1.父组件通过属性进行传递，子组件通过props获取</p>
        <h2>二、子组件向父组件传值</h2>
        <p>1.为子组件绑定函数 {'<子组件 onXXX={this.函数名} />'}</p>
        <p>
          2.在子组件中通过this.props.函数名(mesage),调用函数通过参数形式进行值的传递
        </p>
        <h2>三、兄弟组件之间的传值</h2>
        <p>1.通过使用状态提升，使用相同的父组件进行传递数据</p>
        <p>2.使用redux对state进行统一管理</p>
        <h2>四、跨层级间通信</h2>
        <p>使用context组件：React的context就是一个全局变量，可以从根组件跨级别在React的组件中传递</p>
        <p>1.在根组件声明：static childContextTypes</p>
        <p>2.在跟组件声明：getChildContext(),返回全局变量</p>
        <p>3.在需要访问组件声明：static contextTypes</p>
      </div>
    );
  }
}

export default TransmitData;
