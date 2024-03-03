import axiosInstance from "apis/axios-instance";
import { PostCreate, PostListType } from "models/post";

const { REACT_APP_USER_ID } = process.env;

export const postApi = {
  getHomeData: async () => {
    const res = await axiosInstance.get(`/post/home/1`);

    return res.data;
  },

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

  createPost: async ({
    content,
    title,
    categoryId,
    isPinned,
    thumbnailUrl,
  }: PostCreate) => {
    const res = await axiosInstance.post("/post", {
      content,
      title: title,
      categoryId: Number(categoryId),
      thumbnailUrl,
      isPinned,
    });

    return res.data;
  },

  getPostListByCid: async (cid: string | undefined) => {
    if (!cid)
      return (await axiosInstance.get(`/post/${REACT_APP_USER_ID}`)).data;
    return (await axiosInstance.get(`/post/${REACT_APP_USER_ID}/${cid}`)).data;
  },

  updatePost: async ({
    id,
    title,
    content,
    categoryId,
    thumbnailUrl,
    isPinned,
  }: { id: number } & PostCreate) => {
    const res = await axiosInstance.patch(`/post/${id}`, {
      title,
      content,
      categoryId,
      thumbnailUrl,
      isPinned,
    });

    return res.data;
  },

  deletePost: async (id: string) => {
    const res = await axiosInstance.delete(`/post/${id}`);

    return res.data;
  },
};
