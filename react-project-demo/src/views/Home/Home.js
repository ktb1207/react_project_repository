import React, { Component } from 'react'
import { Route, Switch, Redirect} from 'react-router-dom';
import './Home.less';
import logo from '../../logo.svg';
import LeftMenu from '../../compontents/LeftMenu/LeftMenu.js';
import EventPage from '../../compontents/EventPage/EventPage.js';
import ReduxPage from '../../compontents/ReduxPage/ReduxPage.js';
import RouterPage from '../../compontents/RouterPage/RouterPage.js';
class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render (){
    const match = this.props.match;
    return (
      <div className="home-page-wrp">
        <header className="home-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="home-left">
          <LeftMenu></LeftMenu>
        </div>
        <div className="home-Content">
          <Switch>
            <Route exact path={match.path} component={EventPage}></Route>
            <Route exact path={`${match.path}/redux`} component={ReduxPage}></Route>
            <Route exact path={`${match.path}/router`} component={RouterPage}></Route>
            {/* 错误路由处理 */}
            <Redirect from="/home/*" to="/home"/>
          </Switch>
        </div>
      </div>
    )
  }
}

export default Home;