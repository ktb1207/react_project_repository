import React, { useState } from 'react';
import RouterConfig from '@/router/Index';
import './App.scss';

// interface IProps {}
// const App: React.FC<IProps> = () => {
const App: React.FC = () => {
  return (
    <div className="App">
      <RouterConfig></RouterConfig>
    </div>
  );
};

export default App;
