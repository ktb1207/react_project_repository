import React, { Component } from 'react';
import './ApiState.less'

class ApiState extends Component {
    constructor (props) {
        super(props)
        this.state = {
            num1: 2,
            num2: 0,
        }
        this.clickSameAdd = this.clickSameAdd.bind(this);
    }
    // 相同增加state
    clickSameAdd () {
        const preNum1 = this.state.num1;
        const preNum2 = this.state.num2;
        this.setState({
            num1: preNum1 + 1,
            num2: preNum2 + 1
        })

    }

    shouldComponentUpdate(nextProps, nextState){
        return nextState.num1 >= 10;
    }

    render () {
        return (
            <div className="api-state">
                <div className="demo-wrp">
                    <button onClick={this.clickSameAdd}>sameAddButton</button>
                    <p>点击我的值修改但值相同，看是否有更新？{this.state.num1}</p>
                    <p>num1会影响num2的更新吗？{this.state.num2}</p>
                </div>
                <div className="demo-wrp">
                    <ol>
                        <li>
                            <i>setState相同的值不会触发组件更新</i>
                        </li>
                    </ol>
                </div>
            </div>
        )
    }
}

export default ApiState;