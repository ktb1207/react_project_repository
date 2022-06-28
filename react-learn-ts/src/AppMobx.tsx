import React from 'react';
import ClassPage from './pages/MobxDemo/ClassPage';
import FnPage from './pages/MobxDemo/FnPage';
function AppMobx() {
  return (
    <div>
      <h3>mobx class组件用法</h3>
      <ClassPage></ClassPage>
      <hr />
      <h3>mobx function组件用法</h3>
      <FnPage></FnPage>
    </div>
  );
}

export default AppMobx;
