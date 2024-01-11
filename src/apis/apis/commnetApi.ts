import axiosInstance from "apis/axios-instance";
import { Comment, CreateCommentValue } from "models/comment";

export const commentApi = {
  getCommentsByPid: async (pid: string) => {
    const res = await axiosInstance.get(`/comment/${pid}`);

    return res.data.comments as Comment[];
  },

  writeComment: async ({
    pid,
    username,
    password,
    comment,
  }: CreateCommentValue) => {
    const res = await axiosInstance.post(`/comment/${pid}`, {
      username,
      password,
      comment,
    });

    return res.data;
  },
};
