import React, { Component } from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import api from '../../api/index'
import './login.scss'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
class About extends Component {
  constructor (props) {
    super(props)
    this.state = {
      userName: '',
      userPass: '',
    }
    this.nameInputChange = this.nameInputChange.bind(this)
    this.passInputChange = this.passInputChange.bind(this)
    this.submit = this.submit.bind(this)
  }
  
  // 用户名输入
  nameInputChange (event) {
    this.setState({
      userName: event.target.value
    })
  }
  // 密码输入
  passInputChange (event) {
    this.setState({
      userPass: event.target.value
    })
  }
  submit () {
    const postData = {
      name: this.state.userName,
      password: this.state.userPass
    }
    api.postUserLogin(postData).then(res => {
      console.log(res)
    }).catch(error => {
      console.log(error)
    })
  }
  onFinish = (values) => {
    console.log(values)
  }
  onFinishFailed = (values,errorFields,outOfDate) => {
    console.log(values, errorFields, outOfDate)
  }
  render (){
    return (
      <div className="full-page login-page">
        <div className="login-from">
          {/* <p>用户名：<input type="text" value={this.state.userName} onChange={this.nameInputChange}/></p>
          <p>密码：<input type="password" value={this.state.userPass} onChange={this.passInputChange}/></p>
          <p>
            <button onClick={this.submit}>登录</button>
          </p> */}
          <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
          >
            <Form.Item
              label="用户名"
              name="username"
              rules={[{ required: true, message: '请输入用户名!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="密码"
              name="password"
              rules={[{ required: true, message: '请输入密码!' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
              <Checkbox>记住密码</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit" block loading>
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    )
  }
}

export default About;