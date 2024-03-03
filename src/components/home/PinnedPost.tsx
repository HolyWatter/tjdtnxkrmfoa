import { Post } from "models/post";

const PinnedPost = ({ title, thumbnailUrl, createdAt }: Post) => {
  return (
    <div>
      <p>{title}</p>
    </div>
  );
};

export default PinnedPost;
