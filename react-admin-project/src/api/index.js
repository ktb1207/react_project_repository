import httpAxios from '../utils/configAxios.js';
const baseUrl = '/api';
const api = {
  getList: (data = {}) => httpAxios.get(`${baseUrl}/ess/baseInfo`, {params: data}),
  postData: (data) => httpAxios.post(`${baseUrl}/add/news`, data),
  // 用户登录
  postUserLogin: data => httpAxios.post(`${baseUrl}/user/login`, data),
  // 退出
  postUserQuit: data => httpAxios.post(`${baseUrl}/user/quitLogin`, data),
  // 获取管理员列表数据
  getUserData: () => httpAxios.get(`${baseUrl}/user/list`)
}

export default api;