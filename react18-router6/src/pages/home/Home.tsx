import React, { FC } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface IProps {}

const Home: FC<IProps> = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const hrefUser = (e: React.MouseEvent) => {
    console.log(e);
    console.log(location);
    navigate('/user/123456');
  };

  return (
    <div>
      <h3>这是home页</h3>
      <button onClick={(e) => hrefUser(e)}>跳转user</button>
    </div>
  );
};

export { Home };
