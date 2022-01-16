import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: 'https://cdn.jsdelivr.net/gh/',
  timeout: 500000,
});

axiosInstance.interceptors.request.use(function (config) {
    let authToken = sessionStorage.getItem("authToken");
    config.headers = { ...config.headers, ...(authToken && {Authorization: `Token ${authToken}`}) };
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

axiosInstance.interceptors.response.use(function (response) {
    if(response.status === 401) {
        // future failure logic
    }
    return response;
  }, function (error) {
    return Promise.reject(error);
  });