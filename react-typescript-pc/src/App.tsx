import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IStore } from '@/store/reducer';
import RouterConfig from '@/router/Index';
import util from '@/utils/util';
import { completeLogin, quitLogin } from '@/store/action';
import ModalLoading from './components/modalLoading/ModalLoading';
import './App.scss';

// interface IProps {}
// const App: React.FC<IProps> = () => {
// function App(props: IProps): React.ReactElement {
const App: React.FC = () => {
  // hook store
  const systemLoading = useSelector((state: IStore) => state.loadingState);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('app执行了登录状态判断');
    // 判断当前系统登录状态
    const systemLoginLocalStr: string | null = util.getToken();
    if (systemLoginLocalStr && systemLoginLocalStr !== '') {
      dispatch(completeLogin());
    } else {
      dispatch(quitLogin());
      util.clearToken();
    }
  }, []);
  return (
    <div className="App">
      <RouterConfig></RouterConfig>
      <ModalLoading show={systemLoading} />
    </div>
  );
};

export default App;
