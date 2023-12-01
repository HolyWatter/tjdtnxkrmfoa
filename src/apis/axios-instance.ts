import axios from "axios";
import Cookies from "js-cookie";

const base_url =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_BASE_URL
    : process.env.REACT_APP_BASE_URL_DEV;

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = Cookies.get("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
