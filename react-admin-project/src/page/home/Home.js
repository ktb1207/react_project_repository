import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './home.scss'
import LeftMenus from '../../components/leftMenus/LeftMenus';
import AsyncLazyLoad from '../../components/AsyncLazyLoad.js';
import HeaderFeature from '../../components/headerFeature/HeaderFeature';
const UserManage = AsyncLazyLoad(() => import('../../views/userManage/UserManage.js'))
const OrderManage = AsyncLazyLoad(() => import('../../views/orderManage/OrderManage.js'))
const BusinessManage = AsyncLazyLoad(() => import('../../views/businessManage/BusinessManage.js'))
const EquipmentManage = AsyncLazyLoad(() => import('../../views/equipmentManage/EquipmentManage.js'))
class Home extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  componentDidMount() {
    const { match, location, history } = this.props;
    console.log(match)
    console.log(location)
    console.log(history)
  }
  
  render (){
    return (
      <div className="full-page home-page">
        <header>
          <HeaderFeature />
        </header>
        <div className="home-content">
          <div className="left-menu-wrp">
            <LeftMenus></LeftMenus>
          </div>
          <div className="right-container">
            <div className="home-router-shadow">
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
                  <Route
                    exact
                    path={`/home/equipmentManage/:equipmentId`}
                    render={props => {
                      return <EquipmentManage {...props}></EquipmentManage>;
                    }}
                  ></Route>
                  {/* 错误路由处理 */}
                  <Redirect from={`/home/*`} to="/home" />
                </Switch>
              </Router>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default Home;