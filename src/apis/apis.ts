import { UpdateBlogInfo } from "models/blog.interface";
import axiosInstance from "./axios-instance";
import { PostCreate, PostListType } from "models/post.interface";

const { REACT_APP_USER_ID } = process.env;

export const userApi = {
  getUser: async () => {
    const res = await axiosInstance.get("/users");
    return res.data;
  },
};

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

  createPost: async ({ content, title, categoryId }: PostCreate) => {
    const res = await axiosInstance.post("/post", {
      content,
      title: title,
      categoryId: Number(categoryId),
    });

    return res.data;
  },

  getPostListByCid: async (cid: string | undefined) => {
    if (!cid)
      return (await axiosInstance.get(`/post/${REACT_APP_USER_ID}`)).data;
    return (await axiosInstance.get(`/post/${REACT_APP_USER_ID}/${cid}`)).data;
  },

  updatePost: async () => {},
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
