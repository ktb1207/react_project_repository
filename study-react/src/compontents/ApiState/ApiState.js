import React, { Component } from 'react';
import './ApiState.less'
import ChildState from './ChildState.js';

class ApiState extends Component {
    constructor (props) {
        super(props)
        this.state = {
            num1: 2,
            num2: 0,
        }
        this.clickSameAdd = this.clickSameAdd.bind(this);
        this.addOnePre = this.addOnePre.bind(this);
    }
    // 相同增加state
    clickSameAdd () {
        const preNum1 = this.state.num1;
        this.setState({
            num1: preNum1,
        })

    }
    // click改变1
    addOnePre () {
        this.setState(state => ({
            num2: state.num2 + 1
        })) 
    }

    shouldComponentUpdate(nextProps, nextState){
        // if (nextState.num1 < 5) {
        //     return false;
        // }
        return true;
    }
    componentDidUpdate(){
        console.log('update')
    }

    render () {
        return (
            <div className="api-state">
                <div className="demo-wrp">
                    <button onClick={this.clickSameAdd}>sameAddButton</button>
                    <p>点击我的值修改但值相同，看是否有更新？{this.state.num1}</p>
                    <ChildState value={this.state.num1}></ChildState>
                    <p>总结：</p>
                    <ol>
                        <li>
                            <i>setState相同的值，shouldComponentUpdate，componentDidUpdate生命周期方法会被调用，但组件不会重新渲染，这是react diff更新渲染的背后作用</i>
                        </li>
                        <li>
                            <i>父组件shouldComponentUpdate返回false，子组件不会更新渲染</i>
                        </li>
                        <li>
                            <i>子组件接受相同的props,组件不会重新更新渲染,但是shouldComponentUpdate，componentDidUpdate生命周期方法会被调用</i>
                        </li>
                    </ol>
                </div>
                <div className="demo-wrp">
                <button onClick={this.addOnePre}>+1button</button>
                <p>nu2值每次click + 1 :{this.state.num2}</p>
                <p>总结：</p>
                <ol>
                    <li>
                        <i>父组件更新，会导致子组件更新，子组件可通过shouldComponentUpdate优化更新</i>
                    </li>
                </ol>
                </div>
            </div>
        )
    }
}

export default ApiState;