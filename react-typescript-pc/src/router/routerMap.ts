import React from 'react';
import { IRoute } from './RouterAuth';
const Login = React.lazy(() => import('../page/login/Login'));
const PlatfromIndex = React.lazy(() => import('../page/platfromIndex/PlatfromIndex'));
const MenuHome = React.lazy(() => import('../page/menuHome/MenuHome'));
const ErrorPage = React.lazy(() => import('../page/errorPage/ErrorPage'));
const About = React.lazy(() => import('../page/about/About'));

const routerMap: Array<IRoute> = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    auth: false,
    meta: {
      title: '登录'
    }
  },
  {
    path: '/',
    name: 'App',
    component: PlatfromIndex,
    auth: true,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/platfromIndex',
    name: 'PlatfromIndex',
    component: PlatfromIndex,
    auth: true,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/menuHome',
    name: 'MenuHome',
    component: MenuHome,
    auth: true,
    children: [],
    meta: {
      title: '首页'
    }
  },
  {
    path: '/errorPage',
    name: 'ErrorPage',
    component: ErrorPage,
    auth: false,
    meta: {
      title: '404'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    auth: false,
    meta: {
      title: '关于'
    }
  }
];

export default routerMap;
