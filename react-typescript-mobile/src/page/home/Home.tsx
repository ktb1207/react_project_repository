import React, { Suspense, useEffect } from 'react';
import { Switch, Route, useRouteMatch, NavLink } from 'react-router-dom';
import '@/static/iconfont/iconfont.css';
import styles from './home.module.scss';

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
    <div className={styles['home-page']}>
      <div className={styles['home-router-wrp']}>
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
      <div className={styles['home-bottom-feature']}>
        <NavLink to="/home" exact activeClassName={styles['home-active-link']}>
          <p className={styles['link-icon']}>
            <i className="iconfont iconhome"></i>
          </p>
          <p className={styles['link-text']}>首页</p>
        </NavLink>
        <NavLink to="/home/collect" activeClassName={styles['home-active-link']}>
          <p className={styles['link-icon']}>
            <i className="iconfont iconshoucang"></i>
          </p>
          <p className={styles['link-text']}>收藏</p>
        </NavLink>
        <NavLink to="/home/order" activeClassName={styles['home-active-link']}>
          <p className={styles['link-icon']}>
            <i className="iconfont icondingdan"></i>
          </p>
          <p className={styles['link-text']}>订单</p>
        </NavLink>
        <NavLink to="/home/my" activeClassName={styles['home-active-link']}>
          <p className={styles['link-icon']}>
            <i className="iconfont iconwode"></i>
          </p>
          <p className={styles['link-text']}>我的</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
