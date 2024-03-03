import axios from "axios";
import { ACCESSTOKEN_KEY } from "const/token";

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
    const token = localStorage.getItem(ACCESSTOKEN_KEY);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (error) => {
    // const accessToken = localStorage.getItem(ACCESSTOKEN_KEY);
    if (error?.response?.status === 401) {
      const res = await axiosInstance.post("/auth/token");
      localStorage.setItem(ACCESSTOKEN_KEY, res.data.accessToken);

      return axiosInstance(error.config);
    } else {
      return Promise.reject(error);
    }
  }
);

export default axiosInstance;
