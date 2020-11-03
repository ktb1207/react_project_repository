import AsyncLazyLoad from '../components/AsyncLazyLoad.js';
const Login = AsyncLazyLoad(() => import('../page/login/Login.js'));
const Home = AsyncLazyLoad(() => import('../page/home/Home.js'));
const About = AsyncLazyLoad(() => import('../page/about/About.js'));
const ErrorPage = AsyncLazyLoad(() => import('../page/error/Error.js'));

const routerMap = [
  {
    path: "/", 
    name: "Login", 
    auth: false,
    component: Login
  },
  {
    path: "/login", 
    name: "Login", 
    auth: false,
    component: Login
  },
  {
    path: "/home", 
    name: "Home", 
    auth: true,
    component: Home,
    children: [
      {
        path: "/home/userManage",
        name: "userManage",
      },
      {
        path: "/home/orderManage",
        name: "orderManage",
      },
      {
        path: "/home/businessManage",
        name: "businessManage",
      },
      {
        path: "/home/equipmentManage/:equipmentId",
        name: "equipmentManage",
      },
    ]
  },
  {
    path: "/about", 
    name: "About", 
    auth: true,
    component: About
  },
  {
    path: "/error", 
    name: "Error", 
    auth: false,
    component: ErrorPage
  }
]

export default routerMap;