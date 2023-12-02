import { Post } from "models/post.interface";

const PinnedPost = ({ title, thumbnailUrl, createdAt }: Post) => {
  return (
    <div>
      <p>{title}</p>
    </div>
  );
};

export default PinnedPost;
