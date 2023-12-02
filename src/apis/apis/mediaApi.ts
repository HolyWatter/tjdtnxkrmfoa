import axiosInstance from "apis/axios-instance";

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
