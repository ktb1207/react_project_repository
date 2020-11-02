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
  getUserData: () => httpAxios.get(`${baseUrl}/user/list`),
  // 新增管理员用户
  postAddUser: (data) => httpAxios.post(`${baseUrl}/user/addUser`, data),
  // 删除管理员
  postDeleteUser: (data) => httpAxios.post(`${baseUrl}/user/deleteUser`, data),
  // 修改管理员
  postEditUser: (data) => httpAxios.post(`${baseUrl}/user/updateUser`, data),
  // 运营商列表
  getBusinessData: () => httpAxios.get(`${baseUrl}/business/list`),
  // 新增运营商
  postAddBusiness: (data) => httpAxios.post(`${baseUrl}/business/add`,data,{
    headers:{'Content-Type':'multipart/form-data'}
  }),
  // 删除运营商
  postDeleteBusiness: (data) => httpAxios.post(`${baseUrl}/business/deleteBusiness`, data),
}

export default api;