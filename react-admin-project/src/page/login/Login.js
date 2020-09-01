import React, { Component } from 'react'
import api from '../../api/index'
import './login.scss'
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
  render (){
    return (
      <div className="full-page login-page">
        <div className="login-from">
          <p>用户名：<input type="text" value={this.state.userName} onChange={this.nameInputChange}/></p>
          <p>密码：<input type="password" value={this.state.userPass} onChange={this.passInputChange}/></p>
          <p>
            <button onClick={this.submit}>登录</button>
          </p>
        </div>
      </div>
    )
  }
}

export default About;