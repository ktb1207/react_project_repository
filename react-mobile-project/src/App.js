import React from 'react';
import RouterConfig from './router/index.js';
import './App.scss';
console.log('当前环境地址:' + process.env.REACT_APP_BASE_URL)
function App() {
  return (
    <div className="App">
      <div className="App-content">
        <RouterConfig></RouterConfig>
      </div>
      <div className="App-footer">
        <div className="footer-left"></div>
        <div className="footer-center">
          <div className="center-squre"></div>
        </div>
        <div className="footer-right"></div>
      </div>
    </div>
  );
}

export default App;
