import axios from 'axios';

const baseUrl = process.env.NODE_ENV === 'development' ? '' : process.env.REACT_APP_BASE_URL;

const service = axios.create({
  baseURL: baseUrl,
  timeout:10000,
  withCredentials: true,
})