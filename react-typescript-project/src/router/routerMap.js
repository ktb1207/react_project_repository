import React from 'react';
const Login = React.lazy(() => import('../page/login/Login'));
const Register = React.lazy(() => import('../page/register/Register'));
const Home = React.lazy(() => import('../page/home/Home'));
const EquipmentPage = React.lazy(() => import('../page/equipmentPage/EquipmentPage'));
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
    path: '/register',
    name: 'Register',
    component: Register,
    auth: false
  },
  {
    path: '/',
    name: 'App',
    component: Home,
    auth: true
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    auth: true,
    children: [
      {
        path: '/home',
        name: 'home'
      },
      {
        path: '/home/collect',
        name: 'collect'
      },
      {
        path: '/home/order',
        name: 'order'
      },
      {
        path: '/home/my',
        name: 'my'
      }
    ]
  },
  {
    path: '/equipmentPage',
    name: 'EquipmentPage',
    component: EquipmentPage,
    auth: true,
    params: ['/:typeId']
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
  }
];
