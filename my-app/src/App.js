import React, { Component } from 'react';
// import logo from './logo.svg';
import './style/App.less';
import RouterConfig from './router';
import { InputItem } from 'antd-mobile';

class App extends Component {
  render() {
    // return (
    //   <div className="App">
    //     {/* <div className = "App-header" >
    //             <img src = { logo } className = "App-logo" alt = "logo"/>
    //             <h1 className = "App-title" > Welcome to React.</h1>
    //         </div> */}
    //     <div className="App-container">
    //       <RouterConfig></RouterConfig>
    //     </div>
    //   </div>
    // );

    return <InputItem type="text" value={32.123}></InputItem>;
  }
}

export default App;
