import { createBrowserRouter } from 'react-router-dom';
import React from 'react';

import { routeAuth, loginForm } from './routeAuth';

const HomePage = React.lazy(() => import('@/pages/home/index'));
const LoginPage = React.lazy(() => import('@/pages/login/index'));
const AboutPage = React.lazy(() => import('@/pages/about/index'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage></HomePage>,
    loader: async({params, request}) => await routeAuth({params, request, loginAuth: true, title: 'home'})
  },
  {
    path: '/login',
    element: <LoginPage></LoginPage>,
    loader: async({params, request}) => await routeAuth({params, request, loginAuth: false, title: 'login'})
  },
  {
    path: '/post/login',
    element: <h5>login-ing</h5>,
    action: async({params,request}) => await loginForm({params, request})
  },
  {
    path: '/about',
    element: <h3>about</h3>,
    loader: async({params, request}) => await routeAuth({params, request, loginAuth: false, title: 'about'})
  },
  {
    path: '*',
    element: <h3>404 router</h3>
  },
], {
  basename: '/' // 路由基础路径，适合当前应用不能部署在服务根路径下，必须以 / 开头
})

export {router}
