import { createBrowserRouter } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: '/',
    element: <h3>home</h3>
  },
  {
    path: '/login',
    element: <h3>login</h3>
  },
  {
    path: '/about',
    element: <h3>about</h3>
  }
], {
  basename: '/abc' // 路由基础路径，必须以 / 开头
})

export {router}
