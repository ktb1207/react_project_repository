import React from 'react';
import { ConfigProvider } from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import './App.css';
import RouterConfig from './router';
moment.locale('zh-cn')
function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <div className="App">
        <RouterConfig></RouterConfig>
      </div>
    </ConfigProvider>
  );
}

export default App;
