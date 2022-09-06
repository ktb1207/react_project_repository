import React, { FC } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from '@/pages/home/index';
import Login from '@/pages/login/index';
import About from '@/pages/about/index';
import User from '@/pages/user/index';

interface IProps {}

const App: FC<IProps> = () => {
  return (
    <div>
      <header>
        <Link to="/">login</Link> |<Link to="/home">home</Link> |<Link to="about">about</Link>
      </header>
      <div>
        <Routes>
          <Route path="/" element={<Login></Login>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/user/:userId" element={<User></User>}></Route>
          {/* 404 */}
          <Route path="*" element={<span>not found 404</span>}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
