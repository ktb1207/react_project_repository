import React from 'react';
import RouterConfig from '@/router/index';
// import logo from './logo.svg';
import './App.scss';
console.log('当前环境地址:' + process.env.REACT_APP_BASE_URL);
function App(): React.ReactElement {
  return (
    <div className="App">
      <div className="App-content">
        <RouterConfig></RouterConfig>
      </div>
      <div className="App-footer"></div>
    </div>
  );
}

export default App;
