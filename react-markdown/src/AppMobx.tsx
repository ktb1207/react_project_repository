import React from 'react';
import ClassPage from './pages/MobxDemo/ClassPage';
import FnPage from './pages/MobxDemo/FnPage';
import { Button } from 'smile-ui';
function AppMobx() {
  return (
    <div>
      <h3>mobx class组件用法</h3>
      <ClassPage></ClassPage>
      <hr />
      <Button theme="success">我的按钮</Button>
      <h3>mobx function组件用法</h3>
      <FnPage></FnPage>
    </div>
  );
}

export default AppMobx;
