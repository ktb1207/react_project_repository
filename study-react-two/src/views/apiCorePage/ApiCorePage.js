import React, { Component } from 'react';
import './ApiCorePage.less';

import ApiState from '../../compontents/ApiState/ApiState';

class ApiCorePage extends Component {
    constructor (props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="api-core-page">
                <div className="home-demo-auto">
                    <p className="demo-title">1.api--setState:关于setState的总结整理:</p>
                    <ApiState></ApiState>
                </div>
            </div>
        )
    }
}

export default  ApiCorePage;