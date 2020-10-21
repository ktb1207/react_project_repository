import React, { Component } from 'react';

class ChildState extends Component {
    constructor (props) {
        super(props)
        this.state = {}
    }

    componentDidUpdate() {
        console.log('child update')
    }

    render () {
        const value = this.props.value;
        return (
            <div>从父组件传递的prop值，父组件在一定条件shouldComponentUpdate返回false,看子组件是否有更新：{value}</div>
        )
    }
}

export default ChildState;