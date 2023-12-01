import InputPostValues from "components/write/InputPostValues";
import useWritePostMutation from "components/write/hooks/useWritePostMutation";
import { PostCreate } from "models/post.interface";
import { useQueryClient } from "react-query";
import { useNavigate, useParams } from "react-router-dom";

const WritePostPage = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate } = useWritePostMutation({
    onSuccess: () => {
      queryClient.invalidateQueries(["postlist", ""]);
      console.log(1);
      navigate("/list");
    },
    onError: () => {},
  });

  const onSubmit = (postValues: PostCreate) => {
    mutate(postValues);
  };

  return <InputPostValues onSubmit={onSubmit} />;
};

export default WritePostPage;
