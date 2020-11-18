import React from 'react';
const Login = React.lazy(() => import('../page/login/Login'));
const Home = React.lazy(() => import('../page/home/Home'));
const About = React.lazy(() => import('../page/about/About'));
const ErrorPage = React.lazy(() => import('../page/error/Error'));

export default [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    auth: false
  },
  {
    path: '/errorPage',
    name: 'ErrorPage',
    component: ErrorPage,
    auth: false
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    auth: false
  },
  {
    path: '/',
    name: 'App',
    component: Home,
    auth: true
  }
];
