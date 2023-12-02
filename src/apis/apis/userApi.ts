import axiosInstance from "apis/axios-instance";

export const userApi = {
  getUser: async () => {
    const res = await axiosInstance.get("/users");
    return res.data;
  },
};
