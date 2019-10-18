import React, {Component} from 'react';
import './BasePage.less';

import HocRouterAnmiate from '../../compontents/HocRouterAnmiate/HocRouterAnmiate';

import List from '../../compontents/List/List';

import Clock from '../../compontents/Clock/Clock';

import LiveReact from '../../compontents/LiveReact/LiveReact';

import ReactForm from '../../compontents/Form/Form';

const BasePage = HocRouterAnmiate(
    
    class BasePage extends Component {
        constructor (props) {
            super(props)
            this.state = {
                demoOneArr:[
                    {
                        name:'刘德华',
                        date:'2019-01-12'
                    },{
                        name:'任贤齐',
                        date:'2019-06-12'
                    },{
                        name:'黎明',
                        date:'2019-08-12'
                    },{
                        name:'古天乐',
                        date:'2019-02-12'
                    }
                ]
            }
        }
        componentWillMount(){
            console.log(this.props)
        }
        render () {
            return (
                <div className="base-page">
                    <div className="home-demo">
                        <p className="demo-title">Demo1:列表渲染</p>
                        <List listData={this.state.demoOneArr}></List>
                    </div>
                    <div className="home-demo">
                        <p className="demo-title">Demo2:时钟更新</p>
                        <Clock></Clock>
                    </div>
                    <div className="home-demo-auto">
                        <p className="demo-title">Demo3:react生命周期</p>
                        <LiveReact></LiveReact>
                    </div>
                    <div className="home-demo-auto">
                        <p className="demo-title">Demo4:表单</p>
                        <ReactForm></ReactForm>
                    </div>
                </div>
            )
        }
    }
)

export default BasePage;