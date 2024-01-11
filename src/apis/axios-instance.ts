import axios from "axios";
import Cookies from "js-cookie";

const isDevelop = process.env.NODE_ENV === "development";

const axiosInstance = axios.create({
  baseURL: isDevelop
    ? process.env.REACT_APP_BASE_URL_DEV
    : process.env.REACT_APP_BASE_URL,
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
