import LeftIcon from "components/svg/LeftIcon";
import RightIcon from "components/svg/RightIcon";
import { PostCreate } from "models/post.interface";
import { ChangeEvent, useCallback, useRef, useState } from "react";
import uploadImgFunction from "utils/function/uploadImg";

interface Props {
  content: string;
  onSubmit: (postValues: Partial<PostCreate>) => void;
  thumbnailUrl?: string;
  isPinned?: boolean;
}

const SettingThumbnail = ({
  content,
  onSubmit,
  thumbnailUrl,
  isPinned,
}: Props) => {
  const imgBoxRef = useRef<HTMLDivElement>(null);
  const imgList = sliceSrc(content);
  const [extraValues, setExtraVelus] = useState<Partial<PostCreate>>({
    thumbnailUrl: thumbnailUrl ? thumbnailUrl : "",
    isPinned: isPinned ? isPinned : false,
  });

  const togglePinned = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setExtraVelus((prevValues) => ({
      ...prevValues,
      isPinned: !prevValues.isPinned,
    }));
  }, []);

  const clickButton = useCallback(() => {
    if (!imgBoxRef.current) return;
    imgBoxRef.current.scrollLeft -= 200;
  }, []);

  const clickRightButton = useCallback(() => {
    if (!imgBoxRef.current) return;
    imgBoxRef.current.scrollLeft += 200;
  }, []);

  const selectThumbnail = useCallback((url: string) => {
    setExtraVelus((prevValues) => ({
      ...prevValues,
      thumbnailUrl: url,
    }));
  }, []);

  const uploadThumbnail = useCallback(
    async (e: ChangeEvent<HTMLInputElement>) => {
      const { files } = e.target;
      if (!files) return;
      const link = await uploadImgFunction(files[0]);

      setExtraVelus((prevValues) => ({
        ...prevValues,
        thumbnailUrl: link,
      }));
    },
    []
  );

  return (
    <div className="px-5 w-full">
      <div className="my-10 flex items-center gap-3">
        <p>고정하기</p>
        <input
          type="checkbox"
          onChange={togglePinned}
          checked={extraValues.isPinned}
        />
      </div>

      <div className="my-10">
        {imgList.length ? (
          <>
            <p className="">게시물에서 썸네일 설정</p>
            <div className="flex">
              <button onClick={clickButton}>
                <LeftIcon />
              </button>
              <div
                ref={imgBoxRef}
                className="w-[80%] overflow-x-scroll flex m-auto mt-5 gap-3"
              >
                {sliceSrc(content).map((img) => (
                  <img
                    onClick={() => selectThumbnail(img)}
                    className="w-[100px] h-[100px] rounded-md cursor-pointer"
                    src={img}
                    alt=""
                  />
                ))}
              </div>
              <button onClick={clickRightButton}>
                <RightIcon />
              </button>
            </div>{" "}
          </>
        ) : null}
        <div className="w-[60%] m-auto mt-10 xs:w-full">
          {extraValues.thumbnailUrl !== "" ? (
            <img
              className="w-[80%] h-[400px] m-auto rounded-md "
              src={extraValues.thumbnailUrl}
              alt=""
            />
          ) : (
            <div className="w-[80%] h-[400px] m-auto rounded-md bg-slate-500 flex items-center justify-center">
              <p>썸네일을 설정해주세요</p>
            </div>
          )}
        </div>
        <div className="flex justify-end my-5">
          <label className="py-1 px-5 border-2 rounded-md cursor-pointer">
            이미지 직접 등록
            <input
              onChange={uploadThumbnail}
              type="file"
              className="hidden"
              accept="image/*"
            />
          </label>
        </div>
      </div>
      <div className="mt-10 flex justify-end">
        <button
          className="py-1 px-5 border-2 rounded-md cursor-pointer"
          onClick={() => onSubmit(extraValues)}
        >
          제출하기
        </button>
      </div>
    </div>
  );
};

export default SettingThumbnail;

const sliceSrc = (content: string): string[] => {
  return content
    .split('src="')
    .slice(1)
    .map((el) => el.split(`"`)[0]);
};
