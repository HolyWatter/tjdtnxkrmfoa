import DeleteIcon from "components/svg/delete-icon";
import EditIcon from "components/svg/edit-icon";
import useGetPost from "hooks/useGetPost";
import useUser from "hooks/useUser";
import HTMLReactParser from "html-react-parser";
import { Link, useParams } from "react-router-dom";
import { changeTimeFormat } from "utils/function/changeTimeFormat";

const PostPage = () => {
  const user = useUser();
  const { id = "" } = useParams();
  const { data: post } = useGetPost(id);

  return post ? (
    <div className="w-full">
      <p className="text-sm">{post.categoryName}</p>
      <h1 className="text-xl mt-3">{post.title}</h1>
      {user && (
        <div className="flex justify-end gap-3">
          <Link
            to={`/edit/${id}`}
            className="flex items-center gap-2 px-4 py-1 border-2 rounded-md"
          >
            편집 <EditIcon />
          </Link>
          <button className="flex items-center gap-2 px-4 py-1 border-2 rounded-md">
            삭제 <DeleteIcon />
          </button>
        </div>
      )}
      <div className="w-full mt-5 flex gap-2 justify-end items-end">
        <p>{post.nickname}</p>·
        <p className=" text-gray-500">{changeTimeFormat(post.createdAt)}</p>
      </div>
      <div className="mt-20 px-10">{HTMLReactParser(post.content)}</div>
    </div>
  ) : null;
};

export default PostPage;
