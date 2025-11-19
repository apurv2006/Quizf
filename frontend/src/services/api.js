import axios from 'axios';

const baseURL = import.meta.env.VITE_API_URL 
  || 'https://quizzed-fpepgvdgfnd7bcbd.canadacentral-01.azurewebsites.net/api';

const API = axios.create({ baseURL });

API.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default API;
