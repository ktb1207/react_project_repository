import React from 'react';
import RouterConfig from './router/index.js';
import './App.scss';
console.log('当前环境地址:' + process.env.REACT_APP_BASE_URL)
console.log('当前环境地址:' + process.env.NODE_ENV)
function App() {
  return (
    <div className="App">
      <div className="App-content">
        <RouterConfig></RouterConfig>
      </div>
    </div>
  );
}

export default App;
