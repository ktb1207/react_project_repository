import React, { Component } from 'react';
import './form.less';

class ReactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue1: 'input1',
      inputValue2: 'input2',
      selectValue: '篮球',
      radioApple: 'lick',
      oneStar: true,
      twoStar: false,
      threeStar: false
    };
    this.inputOneChange = this.inputOneChange.bind(this);
    this.inputTwoChange = this.inputTwoChange.bind(this);
    this.selectChange = this.selectChange.bind(this);
    this.selectButton = this.selectButton.bind(this);
    this.radioChange = this.radioChange.bind(this);
    this.checkboxChange = this.checkboxChange.bind(this);
  }

  // input1输入监听
  inputOneChange(event) {
    this.setState({
      inputValue1: event.target.value,
      inputValue2: event.target.value
    });
  }
  // input2输入监听
  inputTwoChange(event) {
    this.setState({
      inputValue1: event.target.value,
      inputValue2: event.target.value
    });
  }
  // 选择框监听
  selectChange(event) {
    this.setState({ selectValue: event.target.value });
  }
  // 按钮点击事件
  selectButton(val) {
    this.setState({ selectValue: val });
  }
  // 单选框监听变化
  radioChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  // 复选框变化监听
  checkboxChange(event) {
    this.setState({ [event.target.value]: event.target.checked });
  }
  render() {
    return (
      <div className="form-wrp">
        <h3>
          和其他元素相比，表单元素在React中的工作方式存在一些不同，像div,p,span等非表单元素
          只需要根据组件的属性或状态进行渲染即可，但表单元素自身维护一些状态，而这些状态默认情况下
          是不受React控制的，例如：input输入框会根据用户的输入自动改变显示的内容，而不是从组件的状态
          中获取显示的内容，我们称这类状态不受React控制的表单元素为
          <i>非受控组件</i>
        </h3>
        <h3>
          在React中，状态的修改必须通过组件的state,非受控组件的行为显然不符合这一原则。
          为了让表单元素状态的变更也能通过组件的state管理，
          <i>React采用受控组件的技术</i>达到这一目的。
        </h3>
        <ol>
          <li>
            <p>文本框</p>
            <p>
              文本框包含类型为text和textarea的元素,让他们受控的主要原理是
              <i>
                通过表单元素的value属性设置表单元素的值，通过表单元素的onChange事件监听值的变化
                并将变化同步到React组件的state。
              </i>
            </p>
            <div>
              <p>
                <span>input1联动input2:</span>
                <input
                  type="text"
                  value={this.state.inputValue1}
                  onChange={this.inputOneChange}
                />
              </p>
              <p>
                <span>input2联动input1:</span>
                <input
                  type="text"
                  value={this.state.inputValue2}
                  onChange={this.inputTwoChange}
                />
              </p>
            </div>
          </li>
          <li>
            <p>列表select</p>
            <p>
              在React中，对select的处理方式有所不同,
              <i>
                它通过在select上定义value属性来决定选哪一个option元素处于选中状态。
                通过表单元素的onChange事件监听值的变化并将变化同步到React组件的state。
              </i>
            </p>
            <p>
              <button onClick={this.selectButton.bind(this, '篮球')}>
                选篮球
              </button>
              <button onClick={this.selectButton.bind(this, '跑步')}>
                选跑步
              </button>
              <button onClick={this.selectButton.bind(this, '乒乓球')}>
                选乒乓球
              </button>
            </p>
            <select
              name="select1"
              value={this.state.selectValue}
              onChange={this.selectChange}
            >
              <option value="篮球">篮球</option>
              <option value="跑步">跑步</option>
              <option value="乒乓球">乒乓球</option>
            </select>
          </li>
          <li>
            <p>复选框和单选框</p>
            <p>
              复选框和单选框的受控方式不同于input输入框，复选框和单选框的值是不变的，变化的是他们的checked状态，因此
              <i>React控制的属性不再是value属性，而是checked属性.</i>
            </p>
            <p>
              单选框当前选中：
              {this.state.radioApple === 'lick' ? '喜欢' : '不喜欢'}
            </p>
            <p>
              <input
                type="radio"
                name="radioApple"
                value="lick"
                checked={this.state.radioApple === 'lick'}
                onChange={this.radioChange}
              />
              喜欢
              <br />
              <input
                type="radio"
                name="radioApple"
                value="noLick"
                checked={this.state.radioApple === 'noLick'}
                onChange={this.radioChange}
              />
              不喜欢
            </p>
            <p>
              复选框当前选中：{this.state.oneStar ? '1星' : ''}
              {this.state.twoStar ? '2星' : ''}
              {this.state.threeStar ? '3星' : ''}
            </p>
            <p>
              <input
                type="checkbox"
                name="star"
                value="oneStar"
                checked={this.state.oneStar}
                onChange={this.checkboxChange}
              />
              1星
              <input
                type="checkbox"
                name="star"
                value="twoStar"
                checked={this.state.twoStar}
                onChange={this.checkboxChange}
              />
              2星
              <input
                type="checkbox"
                name="star"
                value="threeStar"
                checked={this.state.threeStar}
                onChange={this.checkboxChange}
              />
              3星
            </p>
          </li>
        </ol>
      </div>
    );
  }
}

export default ReactForm;
