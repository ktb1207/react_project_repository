import React, { Component } from 'react'
import { Button } from 'antd';
import api from '../../api/index';
import './home.scss'
class Home extends Component {
  constructor(props){
    super(props)
    this.state = {}
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick () {
    api.getList().then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }
  render (){
    return (
      <div>
        <Button type="primary" onClick={this.handleClick}>Primary Button</Button>
      </div>
    )
  }
}

export default Home;