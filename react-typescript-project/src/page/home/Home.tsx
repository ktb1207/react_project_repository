import React, { Suspense, useEffect } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import './home.scss';

const ChildHome = React.lazy(() => import('../childHome/ChildHome'));
const ChildCollect = React.lazy(() => import('../childCollect/ChildCollect'));
const ChildOrder = React.lazy(() => import('../childOrder/ChildOrder'));
const ChildMy = React.lazy(() => import('../childMy/ChildMy'));

const Home: React.FC = () => {
  const { path } = useRouteMatch();
  console.log(path);
  useEffect(() => {
    console.log('updating');
  }, [path]);
  return (
    <div>
      <Switch>
        <Suspense fallback={<div></div>}>
          <Route exact path={`/home`} component={ChildHome}></Route>
          <Route exact path={`/home/collect`} component={ChildCollect}></Route>
          <Route exact path={`/home/order`} component={ChildOrder}></Route>
          <Route exact path={`/home/my`} component={ChildMy}></Route>
          {/* 错误路由处理 */}
          {/* 存在父路由执行两次情况 */}
          {/* <Redirect from="/home/*" to="/home" /> */}
        </Suspense>
      </Switch>
    </div>
  );
};

export default Home;