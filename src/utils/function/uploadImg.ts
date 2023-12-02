import { mediaApi } from "apis/apis/mediaApi";

const uploadImgFunction = async (imgFile: File) => {
  const formData = new FormData();
  formData.append("image", imgFile);
  const res = await mediaApi.uploadImg(formData);
  return res.link as string;
};

export default uploadImgFunction;
