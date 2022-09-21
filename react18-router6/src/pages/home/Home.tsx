import React, { FC } from 'react';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';

interface IProps {}

const Home: FC<IProps> = () => {

  return (
    <div>
      <h3>这是home页</h3>
      <Outlet></Outlet>
    </div>
  );
};

export { Home };
