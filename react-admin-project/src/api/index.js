import httpAxios from '../utils/configAxios.js';
const baseUrl = '/api';
const api = {
  getList: (data = {}) => httpAxios.get(`${baseUrl}/ess/baseInfo`, {params: data}),
  postData: (data) => httpAxios.post(`${baseUrl}/add/news`, data),
  // 用户登录
  postUserLogin: data => httpAxios.post(`${baseUrl}/user/login`, data)
}

export default api;