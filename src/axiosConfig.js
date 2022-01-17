import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://cdn.jsdelivr.net/gh/',
  timeout: 500000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    //Here to interpret every request like auth token, request headers etc
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => {
    if (response.status === 401) {
      // future failure logic
    }
    return response;
  },
  (error) => Promise.reject(error)
);
