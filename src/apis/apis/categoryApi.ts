import axiosInstance from "apis/axios-instance";

const { REACT_APP_USER_ID } = process.env;

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
