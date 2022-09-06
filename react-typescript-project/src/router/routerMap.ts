import React from 'react';
import { IRoute } from './RouterAuth';
import { menuHomeChildClassify } from '@/enums/index';
const Login = React.lazy(() => import('../page/login/Login'));
const PlatfromIndex = React.lazy(() => import('../page/platfromIndex/PlatfromIndex'));
const MenuHome = React.lazy(() => import('../page/menuHome/MenuHome'));
const ErrorPage = React.lazy(() => import('../page/errorPage/ErrorPage'));
const About = React.lazy(() => import('../page/about/About'));

// 二级子路由
const Demo = React.lazy(() => import('@/childRouterPage/aCategory/demo/Demo'));

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
    meta: {
      title: '首页'
    },
    children: [
      {
        path: '/menuHome/a/a',
        name: '采购管理',
        component: Demo,
        auth: true,
        meta: {
          title: 'a'
        },
        childClassify: menuHomeChildClassify.A
      },
      {
        path: '/menuHome/a/b',
        name: '供应商管理',
        component: Demo,
        auth: true,
        meta: {
          title: 'b'
        },
        childClassify: menuHomeChildClassify.A
      },
      {
        path: '/menuHome/a/c',
        name: '合同及招投标管理',
        component: Demo,
        auth: true,
        meta: {
          title: 'C'
        },
        childClassify: menuHomeChildClassify.A
      },
      {
        path: '/menuHome/a/d',
        name: '价格管理',
        component: Demo,
        auth: true,
        meta: {
          title: 'd'
        },
        childClassify: menuHomeChildClassify.A
      },
      {
        path: '/menuHome/a/e',
        name: '招投标过程管理',
        component: Demo,
        auth: true,
        meta: {
          title: 'e'
        },
        childClassify: menuHomeChildClassify.A
      },
      {
        path: '/menuHome/b/a',
        name: '油品销售',
        component: Demo,
        auth: true,
        meta: {
          title: 'e'
        },
        childClassify: menuHomeChildClassify.B
      }
    ]
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
