import { Post } from "models/post.interface";
import { Link } from "react-router-dom";
import { changeTimeFormat } from "utils/function/changeTimeFormat";

const PostItemList = ({
  id,
  title,
  content,
  nickname,
  createdAt,
  thumbnailUrl,
}: Post) => {
  return (
    <Link
      to={`/post/${id}`}
      className="w-full flex p-5 border-grey border-b-2 gap-5 text-clip h-[170px] xs:px-2 xs:h-[130px]"
    >
      {thumbnailUrl ? (
        <img
          src={thumbnailUrl}
          className="w-[130px] h-[130px] rounded-md xs:w-[100px] xs:h-[100px]"
          alt=""
        />
      ) : (
        <div className="w-[130px] h-[130px] bg-gray-400 rounded-md xs:w-[100px] xs:h-[100px]" />
      )}

      <div className="w-4/5 flex flex-col justify-between xs:w-3/5">
        <div>
          <p className="text-lg">{title}</p>
          <p
            className="h-[50px] text-ellipsis overflow-hidden xs:h-[30px]"
            dangerouslySetInnerHTML={{ __html: content.slice(0, 80) }}
          />
        </div>
        <div className="flex justify-end items-end gap-5 xs:flex-col xs:gap-1">
          <p className="whitespace-nowrap">{nickname}</p>
          <p className="text-xs text-gray-400">{changeTimeFormat(createdAt)}</p>
        </div>
      </div>
    </Link>
  );
};
export default PostItemList;
