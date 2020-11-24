import React from 'react';
import { connect, useSelector } from 'react-redux';
import RouterConfig from '@/router/index';
import SystemLoading from './components/systemLoading/SystemLoading';
import './App.scss';
console.log('当前环境地址:' + process.env.REACT_APP_BASE_URL);
interface State {
  loadingState: boolean;
}
const App: React.FC = () => {
  const loadingStatus = useSelector((state: State) => state.loadingState);
  console.log('loading:' + loadingStatus);
  return (
    <div className="App">
      <RouterConfig></RouterConfig>
      <SystemLoading show={loadingStatus} />
    </div>
  );
};

export default connect(null, null)(App);
