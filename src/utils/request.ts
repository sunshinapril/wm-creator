import axios from "axios";
import type { AxiosRequestConfig, AxiosResponse } from "axios";

const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 50000,
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
});

// 拦截器

service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    if (config && config.headers) {
      config.headers.Authorization = "";
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (res: AxiosResponse) => {
    const { code, msg } = res.data;
    if (code === 0) {
      return res.data;
    } else {
      return Promise.reject(new Error(msg || "error"));
    }
  },
  (error) => {
    const { code, msg } = error.response.data;
    if (code === "401") {
      // token过期
    }
    return Promise.reject(new Error(msg || "error"));
  }
);

export default service;
