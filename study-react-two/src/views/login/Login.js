import React, {Component} from 'react';
import { Redirect } from "react-router-dom";
// import PropTypes from 'prop-types'
// import {withRouter } from 'react-router';
import './Login.less';

import { Row, Col, Input, Button, Icon} from 'antd';
class LoginPage extends Component {
    // static contextTypes = {
    //     router: PropTypes.object.isRequired,
    // }
    constructor (props) {
        super(props)
        this.state = {
            inputValue:'',
            loginStatus:false
        }
        this.loginMethod = this.loginMethod.bind(this)
        this.changeLoginValue = this.changeLoginValue.bind(this)
    }
    
    changeLoginValue(e){
        // 事件池
        /** 
         * 虚拟事件对象已经被合并。这意味着虚拟事件对象将被重新使用，而该事件回调被调用之后所有的属性将无效。
         * 这是出于性能的考虑。因此，您不能以异步的方式访问事件。
         * 
         * 如果您想以一个异步的方式来访问事件属性，您应该对事件调用event.persist()。
         * 这将从事件池中取出合成的事件，并允许该事件的引用，使用户的代码被保留。
        */
        e.persist();
        this.setState({inputValue:e.target.value})
    }
    // 登录方法
    loginMethod(){
        if(this.state.inputValue !== ''){
            this.setState({loginStatus:true})
        }
    }
    render () {
        if(this.state.loginStatus){
            return <Redirect to={{ pathname: "/home" }} />
            // this.props.history.push('/home')
        }
        return (
            <div className="login-page">
                <div className="login-bar-wrp">
                <Row>
                    <Col span={16}>
                        <Input placeholder="路过留下个脚印吧..."  value={this.state.inputValue} onChange={this.changeLoginValue}/>
                    </Col>
                    <Col span={2}></Col>
                    <Col span={4}>
                        <Button type="primary" onClick={this.loginMethod}>找寻你的梦想<Icon type="right" /></Button>
                    </Col>
                </Row>
                </div>
            </div>
        )
    }
}
// export default withRouter(LoginPage);
export default LoginPage;