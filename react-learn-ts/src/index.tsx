/****************/

// 重要说明：注释部分为Redux用例部分

/****************/
import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import store from './store/index';
import './index.css';
// import App from './App';
import AppMobx from './AppMobx';

import { Provider } from 'mobx-react';
import { stores } from './mobxStore/index';
import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <AppMobx></AppMobx>
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <React.StrictMode>
    <Provider {...stores}>
      <AppMobx></AppMobx>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
