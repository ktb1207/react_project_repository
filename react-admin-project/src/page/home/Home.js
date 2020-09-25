import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './home.scss'
import LeftMenus from '../../components/leftMenus/LeftMenus';
import AsyncLazyLoad from '../../components/AsyncLazyLoad.js';
const UserManage = AsyncLazyLoad(() => import('../../views/userManage/UserManage.js'))
const OrderManage = AsyncLazyLoad(() => import('../../views/orderManage/OrderManage.js'))
const BusinessManage = AsyncLazyLoad(() => import('../../views/businessManage/BusinessManage.js'))
class Home extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  componentDidMount() {
    console.log(this.props.match)
  }
  
  render (){
    const match = this.props.match;
    console.log(match)
    return (
      <div className="full-page home-page">
        <header></header>
        <div className="home-content">
          <div className="left-menu-wrp">
            <LeftMenus></LeftMenus>
          </div>
          <div className="right-container">
            <Router>
              <Switch>
                <Route
                  exact
                  path={'/home'}
                  render={props => {
                    return <UserManage {...props}></UserManage>;
                  }}
                ></Route>
                <Route
                  exact
                  path={'/home/userManage'}
                  render={props => {
                    return <UserManage {...props}></UserManage>;
                  }}
                ></Route>
                <Route
                  exact
                  path={`/home/orderManage`}
                  render={props => {
                    return <OrderManage {...props}></OrderManage>;
                  }}
                ></Route>
                <Route
                  exact
                  path={`/home/businessManage`}
                  render={props => {
                    return <BusinessManage {...props}></BusinessManage>;
                  }}
                ></Route>
                {/* 错误路由处理 */}
                <Redirect from={`/home/*`} to="/home" />
              </Switch>
            </Router>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;