import Post from "components/post";
import CommentForm from "components/post/CommentForm";
import CommentList from "components/post/CommentList";
import SEO from "components/shared/SEO";
import usePost from "hooks/usePost";
import { useParams } from "react-router-dom";
import { removeHtmlTags } from "utils/function/removeHTMLTag";

const PostPage = () => {
  const { id = "" } = useParams();
  const { data: post } = usePost(id);

  if (post == null) return null;

  const { categoryName, title, createdAt, content, nickname, thumbnailUrl } =
    post;

  return (
    <>
      <SEO
        image={thumbnailUrl}
        title={`성수로그 - ${title}`}
        description={removeHtmlTags(content).slice(0, 80)}
      />
      <Post
        id={id}
        categoryName={categoryName}
        nickname={nickname}
        createdAt={createdAt}
        title={title}
        content={content}
      />
      <CommentForm id={id} />
      <div className="h-10" />
      <CommentList id={id} />
    </>
  );
};

export default PostPage;
