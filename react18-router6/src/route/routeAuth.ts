import { LoaderFunctionArgs, redirect, ActionFunctionArgs } from 'react-router-dom';

interface AuthArgs extends LoaderFunctionArgs {
  loginAuth: boolean;
  title?: string;
}

export async function routeAuth(args: AuthArgs) {
  const { params, request, loginAuth, title } = args;
  if (title) {
    document.title = title;
  }
  const loginStatus = await isLogin()
  if (!loginStatus && loginAuth) {
    throw redirect('/login')
  }
  // console.log(params)
  // console.log(request)
  // console.log(loginAuth)
  // console.log(new URL(request.url).pathname)
}


function isLogin(){
  return new Promise((resolve, reject) => {
    const loginInfo = localStorage.getItem('react18')
    setTimeout(() => resolve(loginInfo), 2000)
  } )
}


export async function loginForm(args: ActionFunctionArgs) {
  const {params, request} = args
  console.log(params)
  console.log(request)
  return redirect('/home')
}