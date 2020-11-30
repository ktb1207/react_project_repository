import React, { useState, useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import RouterConfig from '@/router/index';
import SystemLoading from '@/components/systemLoading/SystemLoading';
import MNav from './components/MNav/MNav';
import './App.scss';
console.log('当前环境地址:' + process.env.REACT_APP_BASE_URL);
interface IProps {}
interface State {
  loadingState: boolean;
}
const App: React.FC<IProps> = () => {
  const loadingStatus = useSelector((state: State) => state.loadingState);
  console.log('loading:' + loadingStatus);
  const [showHeader, setHeader] = useState(false);
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
      <div className="App-header-nav">{showHeader && <MNav onBack={navBack}></MNav>}</div>
      <RouterConfig></RouterConfig>
      <SystemLoading show={loadingStatus} />
    </div>
  );
};

export default connect(null, null)(App);
