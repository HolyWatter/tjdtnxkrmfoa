import { blogApi } from "apis/apis/blogApi";
import { UpdateBlogInfo } from "models/blog.interface";
import { useMutation, useQueryClient } from "react-query";

interface Props {
  onSuccess: () => void;
  onError: () => void;
}

const useProfileMutation = ({ onSuccess, onError }: Props) => {
  const queryClient = useQueryClient();
  return useMutation(
    (profileData: UpdateBlogInfo) => blogApi.updateBlogInfo(profileData),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("blogInfo");
        onSuccess();
      },
      onError: () => {
        onError();
      },
    }
  );
};

export default useProfileMutation;
