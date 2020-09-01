import axios from 'axios';

const baseUrl = process.env.NODE_ENV === 'development' ? '' : process.env.REACT_APP_BASE_URL;

const httpAxios = axios.create({
  baseURL: baseUrl,
  timeout:10000,
  withCredentials: true,
})
// 请求拦截
httpAxios.interceptors.request.use(config => {
  if (config.method === 'get') {
    config.params = {
      ...config.params,
      _t: Date.parse (new Date ()) / 1000,
    };
  }
  if (config.method === 'post') {
    if (config.headers['Content-Type'] === 'application/json') {
      console.log(config.data)
    } else if (config.headers['Content-Type'] === 'application/x-www-form-urlencoded') {
      console.log(config.data)
    } else {
      console.log(config.data)
    }
  }
  return config;
}, error => {
  return Promise.reject (error);
})

// 响应拦截
httpAxios.interceptors.response.use(res => {
  if (res.status === 200) {
    return res;
  }
},
error => {
  if (error && error.response) {
    let msg = '请求出错';
    switch (error.response.status) {
    case 404:
      msg = '请求地址出错';
      break;
    case 408:
      msg = '请求超时';
      break;
    case 500:
      msg = '服务器内部错误';
      break;
    case 502:
      msg = '服务器内部错误';
      break;
    default:
      msg = '';
      break;
    }
    meaasgeToast(msg);
  }
  return Promise.reject (error);
})

function meaasgeToast (msg) {
  alert(msg)
}

export default httpAxios;