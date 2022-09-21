import { LoaderFunctionArgs, redirect, ActionFunctionArgs} from 'react-router-dom';

interface AuthArgs extends LoaderFunctionArgs {
  loginAuth: boolean;
  title?: string;
}

interface ILoginArgs{
  userName: string;
  password: string;
}



export async function routeAuth(args: AuthArgs) {
  const { params, request, loginAuth, title } = args;
  const path = new URL(request.url).pathname;
  if (title) {
    document.title = title;
  }
  const loginStatus = await isLogin()
  // 未登录-访问需要登录页面
  if (!loginStatus && loginAuth) {
    throw redirect('/login')
  }
  // 已登录-访问登录页
  if (loginStatus && path === '/login') {
    throw redirect('/')
  }
}

export async function loginForm(args: ActionFunctionArgs) {
  const {params, request} = args;
  const formData = await request.formData();
  const password = formData.get('password') as string;
  const userName = formData.get('userName') as string;
  try {
    const res = await login({userName, password})
    return redirect('/')
  } catch {
    window.alert('login error')
    return redirect('/login')
  }
}


function login(data: ILoginArgs){
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (data.userName && data.password) {
        localStorage.setItem('react18', data.userName + data.password)
        res('success')
      } else {
        rej('error')
      }
    }, 2000)
  })
}
function isLogin(){
  return new Promise((resolve, reject) => {
    const loginInfo = localStorage.getItem('react18')
    setTimeout(() => resolve(loginInfo), 2000)
  } )
}
