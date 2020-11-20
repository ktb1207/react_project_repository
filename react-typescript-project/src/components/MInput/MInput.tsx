import React, { Component, ChangeEvent } from 'react';
import './minput.scss';

interface IProps {
  value?: string; // 默认值
  label?: string; // 标题
  placeHolder?: string; // 提示
  horizontal?: boolean; // 展示方式
  type?: string; // input type
  change?(value: string): void; // 父组件传值
}

interface IState {
  inputValue: string | undefined;
}

class MInput extends Component<IProps, IState> {
  static defaultProps = {
    label: '标题',
    placeHolder: 'placeholder',
    value: '',
    horizontal: true,
    type: 'text'
  };
  constructor(props: IProps) {
    super(props);
    this.state = {
      inputValue: props.value
    };
  }

  inputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    // 受控技术
    this.setState({
      inputValue: event.target.value
    });
    // 反馈值
    if (this.props.change) {
      this.props.change(event.target.value);
    }
  };

  render(): React.ReactElement {
    const label = this.props.label;
    const horizontal = this.props.horizontal;
    const inputType = this.props.type;
    return (
      <div className={['m-input', horizontal ? 'horizontal-input' : 'vertical-input'].join(' ')}>
        <div className="m-label">{label}:</div>
        <div className="m-input">
          <input type={inputType} placeholder={this.props.placeHolder} value={this.state.inputValue} onChange={this.inputChange} />
        </div>
      </div>
    );
  }
}

export default MInput;
