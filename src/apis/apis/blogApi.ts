import axiosInstance from "apis/axios-instance";
import { UpdateBlogInfo } from "models/blog";

const { REACT_APP_USER_ID } = process.env;

export const blogApi = {
  getBlogInfo: async () => {
    const res = await axiosInstance.get(`/blog/${REACT_APP_USER_ID}`);

    return res.data;
  },

  updateBlogInfo: async (value: UpdateBlogInfo) => {
    const res = await axiosInstance.patch(`/blog/${REACT_APP_USER_ID}`, value);

    return res.data;
  },
};
