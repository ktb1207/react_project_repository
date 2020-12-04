import React from 'react';
const Login = React.lazy(() => import('../page/login/Login'));
const Register = React.lazy(() => import('../page/register/Register'));
const Home = React.lazy(() => import('../page/home/Home'));
const EquipmentPage = React.lazy(() => import('../page/equipmentPage/EquipmentPage'));
const EquipmentDetails = React.lazy(() => import('../page/equipmentDetails/EquipmentDetails'));
const About = React.lazy(() => import('../page/about/About'));
const ErrorPage = React.lazy(() => import('../page/error/Error'));

export default [
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
    path: '/register',
    name: 'Register',
    component: Register,
    auth: false,
    meta: {
      title: '注册'
    }
  },
  {
    path: '/',
    name: 'App',
    component: Home,
    auth: true,
    meta: {
      title: '首页'
    }
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
    ],
    meta: {
      title: '首页'
    }
  },
  {
    path: '/equipmentPage',
    name: 'EquipmentPage',
    component: EquipmentPage,
    auth: true,
    params: ['/:typeId'],
    meta: {
      title: '设备列表'
    }
  },
  {
    path: '/equipmentDetails',
    name: 'EquipmentDetails',
    component: EquipmentDetails,
    auth: true,
    params: ['/:typeId'],
    meta: {
      title: '设备详情'
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
