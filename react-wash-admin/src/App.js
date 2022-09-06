import React from 'react';
import { connect, useSelector } from "react-redux";
import RouterConfig from './router/routerConfig.js';
import SystemLoading from './components/systemLoading/SystemLoading';
import './App.scss';
console.log('当前环境地址:' + process.env.REACT_APP_BASE_URL)
console.log('当前环境:' + process.env.NODE_ENV)
const App = ()=> {
  const loadingStatus = useSelector(state => state.appState.loadingState)
  return (
    <div className="App">
      <div className="App-content">
        <RouterConfig></RouterConfig>
      </div>
      <SystemLoading show={loadingStatus}/>
    </div>
  );
}


export default connect(
  null,
  null
)(App)
