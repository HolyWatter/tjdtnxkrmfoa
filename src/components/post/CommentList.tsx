import Comment from "./Comment";
import useComment from "./hooks/useComment";
// import { Comment as IComment } from "models/comment";

interface Props {
  id: string;
}

const CommentList = ({ id }: Props) => {
  const { comments } = useComment({
    pid: id,
  });

  if (comments == null) return null;

  return (
    <div className="px-5 mt-5 xs:px-0">
      {comments.map((comment) => (
        <Comment key={comment.id} {...comment} />
      ))}
    </div>
  );
};

export default CommentList;
