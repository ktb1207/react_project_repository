import httpAxios from '../utils/configAxios.js';
const apiVerson = '/api/v1';
const api = {
  getList: (data) => httpAxios.get(`${apiVerson}/news/list`, {params: data}),
  postData: (data) => httpAxios.post(`${apiVerson}/add/news`, data)
}

export default api;