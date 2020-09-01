import httpAxios from '../utils/configAxios.js';
const serverEss = '/hrd-ess-service';
const baseUrl = '/api';
const apiVersion = '/v1';
const api = {
  getList: (data = {}) => httpAxios.get(`${serverEss}${baseUrl}${apiVersion}/ess/baseInfo`, {params: data}),
  postData: (data) => httpAxios.post(`${serverEss}/add/news`, data)
}

export default api;