import httpAxios from '../utils/configAxios';
const baseUrl = '/api';
interface IPromise {
  then: () => void;
  catch: () => void;
}

const api = {
  testGet: (data = {}): Promise<IPromise> => httpAxios.get(`${baseUrl}/ess/baseInfo`, { params: data }),
  testPost: (data = {}): Promise<IPromise> => httpAxios.post(`${baseUrl}/add/news`, data)
};

export default api;
