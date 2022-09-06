import React, {Component} from 'react';
import './StepPage.less';

import HocRouterAnmiate from '../../compontents/HocRouterAnmiate/HocRouterAnmiate';

import ReactState from '../../compontents/ReactState/ReactState';
import ReactEvent from '../../compontents/ReactEvent/ReactEvent';
import ReactRouter from '../../compontents/ReactRouter/ReactRouter';
import ReactComponent from '../../compontents/ReactComponent/ReactComponent';

const StepPage = HocRouterAnmiate(
    class StepPage extends Component {
        constructor (props) {
            super(props)
            this.state = {
                
            }
        }
        render () {
            return (
                <div className="step-page">
                    <div className="home-demo-auto">
                        <p className="demo-title">Demo5:关于state理解</p>
                        <ReactState></ReactState>
                    </div>
                    <div className="home-demo-auto">
                        <p className="demo-title">Demo6:关于React合成事件</p>
                        <ReactEvent></ReactEvent>
                    </div>
                    <div className="home-demo-auto">
                        <p className="demo-title">Demo7:关于react-router的正确使用方式</p>
                        <ReactRouter></ReactRouter>
                    </div>
                    <div className="home-demo-auto">
                        <p className="demo-title">Demo8:关于react组件创建方式</p>
                        <ReactComponent></ReactComponent>
                    </div>
                </div>
            )
        }
    }
)

export default StepPage;