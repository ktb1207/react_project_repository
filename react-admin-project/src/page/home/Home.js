import React, { Component } from 'react'
import './home.scss'
import LeftMenus from '../../components/leftMenus/LeftMenus';
class Home extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  
  render (){
    return (
      <div className="full-page home-page">
        <header></header>
        <div className="home-content">
          <div className="left-menu-wrp">
            <LeftMenus></LeftMenus>
          </div>
          <div className="right-container"></div>
        </div>
      </div>
    )
  }
}

export default Home;