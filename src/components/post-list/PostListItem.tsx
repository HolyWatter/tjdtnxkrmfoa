import { Post } from "models/post.interface";
import { Link } from "react-router-dom";
import { changeTimeFormat } from "utils/function/changeTimeFormat";

interface Props extends Post {
  isHome?: boolean;
}

const PostItemList = ({
  id,
  title,
  content,
  nickname,
  createdAt,
  thumbnailUrl,
  isHome = false,
}: Props) => {
  return (
    <Link
      to={`/post/${id}`}
      className="w-full flex py-5 border-grey border-b-2 gap-5 text-clip h-[170px] xs:px-2 xs:h-[130px]"
    >
      {thumbnailUrl ? (
        <img
          src={thumbnailUrl}
          className={`${
            isHome ? "w-[100px]" : "w-[130px]"
          }  h-[130px] rounded-md xs:w-[100px] xs:h-[100px]`}
          alt=""
        />
      ) : (
        <div className="w-[130px] h-[130px] bg-gray-400 rounded-md xs:w-[100px] xs:h-[100px]" />
      )}

      <div className="w-4/5 flex flex-col justify-between xs:w-full">
        <div>
          <p className="text-lg xs:text-sm">{title}</p>
          {!isHome && (
            <p
              className="h-[50px] text-ellipsis overflow-hidden xs:h-[30px]"
              dangerouslySetInnerHTML={{ __html: content.slice(0, 80) }}
            />
          )}
        </div>
        <div className="flex justify-end items-end gap-5 xs:flex-col xs:gap-1">
          <p className="whitespace-nowrap xs:text-sm">{nickname}</p>
          <p className="text-xs text-gray-400 xs:text-xs">
            {changeTimeFormat(createdAt)}
          </p>
        </div>
      </div>
    </Link>
  );
};
export default PostItemList;
