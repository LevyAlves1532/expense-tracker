import axios, { AxiosError, isAxiosError } from 'axios';
import { BASE_URL } from './apiPaths';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
  },
});

// Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("token");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle common errors globally
    if (isAxiosError(error)) {
      if (error.response) {
        if (error.response.status === 401) {
          // Redirect to Login
          window.location.href = '/login';
        } else if (error.response.status === 500) {
          console.error('Server error. Please try again later.');
        }
      } else if (error.code === 'ECONNABORTED') {
        console.error('Request timeout. Please try again.');
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
