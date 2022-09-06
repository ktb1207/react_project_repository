import React from 'react';

const HomePage = React.lazy(() => import('@/pages/home/index'));
const LoginPage = React.lazy(() => import('@/pages/login/index'));
const AboutPage = React.lazy(() => import('@/pages/about/index'));

const routeMap = [
  {
    path: '/home',
    component: HomePage,
    requireLogin: true,
    meta: {
      name: '首页'
    }
  },
  {
    path: '/about',
    component: AboutPage,
    requireLogin: true,
    meta: {
      name: '关于'
    }
  },
  {
    path: '/login',
    component: LoginPage,
    requireLogin: false,
    meta: {
      name: '登录'
    }
  }
];

export { routeMap };
