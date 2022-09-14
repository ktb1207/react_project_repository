import React, { FC } from 'react';
import { router } from '@/route/index';
import { RouterProvider } from 'react-router-dom'
import './App.css';


interface IProps {}

const App: FC<IProps> = () => {
  return (
    <div>
      <h1>app</h1>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;
