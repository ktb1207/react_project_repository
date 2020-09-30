
import React, { Component } from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import util from '../../utils/utils.js';
import api from '../../api/index'
import './login.scss'
const querystring = require('querystring');

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
      loginLoading: false,
      initFormData: {
        remember: true, 
        username: '',
        password: ''
      }
    }
    this.formRef = React.createRef();
  }
  componentDidMount () {
    const rememberLogin = util.getCookie('system_remember_login');
    if (rememberLogin) {
      const parseInfo = querystring.parse(rememberLogin)
      this.setState((state) => ({
        initFormData: {...state.initFormData, username: parseInfo.row1, password: parseInfo.row2}
      }),() => {
        // 重置表单，表单初始值生效
        this.formRef.current.resetFields();
      })
    }
  }
  onFinish = (values) => {
    this.setState({loginLoading: true})
    const postData = {
      name: values.username,
      password: values.password
    }
    const isRemember = values.remember;
    const { history } = this.props;
    // try {
    //   await api.postUserLogin(postData).then(res => {
    //     if (res.code === 0) {
    //       const token = res.data.token;
    //       // 登录token
    //       util.setToken(token)
    //       // 记住用户名密码
    //       if (isRemember) {
    //         const cookieValue = `row1=${values.username}&row2=${values.password}`
    //         util.setCookie('system_remember_login', cookieValue)
    //       }
    //       // 跳转home页
    //       this.setState({loginLoading: false},() => {
    //         history.replace('/home')
    //       })
    //     }
    //   })
    // } catch (error) {
    //   console.log(error)
    //   this.setState({loginLoading: false})
    // }

    this.setState({loginLoading: false},() => {
      util.setToken('asdfghjk123qwertyu')
      if (isRemember) {
        const cookieValue = `row1=${values.username}&row2=${values.password}`
        util.setCookie('system_remember_login', cookieValue)
      }
      history.replace('/home')
    })
  }
  onFinishFailed = (failes) => {
    console.log(failes)
  }
  render (){
    return (
      <div className="full-page login-page">
        <div className="login-from">
          <Form
            ref={this.formRef}
            {...layout}
            name="basic"
            initialValues={this.state.initFormData}
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
              <Input.Password/>
            </Form.Item>

            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
              <Checkbox>记住密码</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit" block loading={this.state.loginLoading}>
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