import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { IStore } from '@/store/reducer';
import RouterConfig from '@/router/Index';
import ModalLoading from './components/modalLoading/ModalLoading';
import './App.scss';

// interface IProps {}
// const App: React.FC<IProps> = () => {
// function App(props: IProps): React.ReactElement {
const App: React.FC = () => {
  // hook store
  const systemLoading = useSelector((state: IStore) => state.loadingState);
  return (
    <div className="App">
      <RouterConfig></RouterConfig>
      <ModalLoading show={systemLoading} />
    </div>
  );
};

export default App;
