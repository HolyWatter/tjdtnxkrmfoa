import { UpdateBlogInfo } from "types/blog.interface";
import axiosInstance from "./axios-instance";
import { PostListType } from "types/post.interface";

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

export const categoryApi = {
  getUserCategory: async () => {
    const res = await axiosInstance.get(`/category/${REACT_APP_USER_ID}`);

    return res.data;
  },

  createNewCategory: async (categoryName: string) => {
    const res = await axiosInstance.post("/category", {
      categoryName,
    });

    return res.data;
  },

  deleteCategory: async (categoryId: number) => {
    const res = await axiosInstance.delete(`/category/${categoryId}`);

    return res.data;
  },

  updateCategory: async (categoryId: number, categoryName: string) => {
    const res = await axiosInstance.patch(`/category/${categoryId}`, {
      categoryName,
    });

    return res.data;
  },
};

export const postApi = {
  getOnePost: async (id: string) => {
    const res = await axiosInstance.get(`/post/detail/${id}`);

    return res.data;
  },

  searchPost: async (keyword: string): Promise<PostListType> => {
    const res = await axiosInstance.get<PostListType>(
      `/post/search/${REACT_APP_USER_ID}?keyword=${keyword}`
    );

    return res.data;
  },
};

export const mediaApi = {
  uploadImg: async (formData: FormData) => {
    const res = await axiosInstance.post("/media/image", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return res.data;
  },
};
