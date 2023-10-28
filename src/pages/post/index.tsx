import { postApi } from "apis/apis";
import HTMLReactParser from "html-react-parser";
import { useQueries, useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { changeTimeFormat } from "utils/function/changeTimeFormat";

const Post = () => {
  const { id } = useParams();
  const { data: post } = useQuery<Post>(["post", id], () =>
    postApi.getOnePost(id!)
  );

  return post ? (
    <div className="w-full">
      <p className="text-sm">{post.categoryName}</p>
      <h1 className="text-xl mt-3">{post.title}</h1>
      <div className="w-full mt-5 flex gap-2 justify-end items-end">
        <p>{post.nickname}</p>·
        <p className=" text-gray-500">{changeTimeFormat(post.createdAt)}</p>
      </div>
      <div className="mt-20 px-10">{HTMLReactParser(post.content)}</div>
    </div>
  ) : null;
};

export default Post;

interface Post {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  categoryName: string;
  nickname: string;
}
