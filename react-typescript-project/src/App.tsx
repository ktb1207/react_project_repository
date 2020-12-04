import React, { useState, useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import RouterConfig from '@/router/index';
import SystemLoading from '@/components/systemLoading/SystemLoading';
import MNav from './components/MNav/MNav';
import routerMap from '@/router/routerMap';
import './App.scss';
console.log('当前环境地址:' + process.env.REACT_APP_BASE_URL);
interface IProps {}
interface State {
  loadingState: boolean;
}
const App: React.FC<IProps> = () => {
  const loadingStatus = useSelector((state: State) => state.loadingState);
  console.log('loading:' + loadingStatus);
  // 导航显示
  const [showHeader, setHeader] = useState<boolean>(false);
  // 导航标题
  const [headerTitle, setHeaderTitle] = useState<string>('标题');
  // 导航返回
  const navBack = (fn: () => void): void => {
    fn();
  };
  useEffect(() => {
    window.addEventListener(
      'hashchange',
      () => {
        if (window.location.hash === '#/login' || window.location.hash.includes('/home')) {
          setHeader(false);
        } else {
          // 修改导航标题
          routerMap.forEach((item): void => {
            if (window.location.hash.includes(item.path)) {
              setHeaderTitle(item.meta.title);
            }
          });
          // 显示顶部导航
          setHeader(true);
        }
      },
      false
    );
    return () => {
      window.removeEventListener(
        'hashchange',
        () => {
          console.log('擦除');
        },
        false
      );
    };
  }, ['']);
  return (
    <div className="App">
      <div className="App-header-nav">{showHeader && <MNav title={headerTitle} onBack={navBack}></MNav>}</div>
      <RouterConfig></RouterConfig>
      <SystemLoading show={loadingStatus} />
    </div>
  );
};

export default connect(null, null)(App);
