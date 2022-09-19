import { LoaderFunction, LoaderFunctionArgs } from 'react-router-dom';

interface AuthArgs extends LoaderFunctionArgs {
  loginAuth: boolean;
}

export async function routeAuth(args: AuthArgs) {
  const { params, request, loginAuth } = args;
  await isLogin()
  // console.log(params)
  // console.log(request)
  // console.log(loginAuth)
  // console.log(new URL(request.url).pathname)
}


function isLogin(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('done')
    }, 3000)
  } )
}