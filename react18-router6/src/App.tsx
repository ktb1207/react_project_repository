import React, { FC, Suspense } from 'react';
import { router } from '@/route/index';
import { RouterProvider } from 'react-router-dom'
import './App.css';


interface IProps {}

const App: FC<IProps> = () => {
  return (
    <div className='app-router-root'>
      <Suspense fallback={<h1>root loading</h1>}>
        <RouterProvider router={router}></RouterProvider>
      </Suspense>
    </div>
  );
};

export default App;
