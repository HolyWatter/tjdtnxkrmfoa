import { commentApi } from "apis/apis/commnetApi";
import { Comment, CreateCommentValue } from "models/comment";
import { useMutation, useQuery, useQueryClient } from "react-query";

interface Props {
  pid: string;
  writeSuccess?: () => void;
}

const useComment = ({ pid, writeSuccess }: Props) => {
  const client = useQueryClient();

  const { data: comments, isLoading } = useQuery<Comment[]>(
    ["comments", pid],
    () => commentApi.getCommentsByPid(pid)
  );

  const { mutate: writeComment, isLoading: isLoadingWrite } = useMutation(
    (commentValue: Omit<CreateCommentValue, "pid">) =>
      commentApi.writeComment({ ...commentValue, pid: Number(pid) }),
    {
      onSuccess: () => {
        writeSuccess && writeSuccess();
        client.invalidateQueries(["comments", pid]);
      },
    }
  );

  return {
    comments: comments,
    writeComment,
    isLoadingWrite,
    isLoading,
  };
};

export default useComment;
