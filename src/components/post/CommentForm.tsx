import Flex from "components/shared/Flex";
import Text from "components/shared/Text";
import Input from "components/shared/input/DefaultInput";
import TextArea from "components/shared/input/DefaultTextarea";
import useInput from "hooks/useInput";
import { useCallback } from "react";
import useComment from "./hooks/useComment";
import { useSlidePopup } from "hooks/useSlidePopup";

interface Props {
  id: string;
}

const CommentForm = ({ id }: Props) => {
  const openPopup = useSlidePopup();

  const { writeComment, isLoadingWrite } = useComment({
    pid: id,
    writeSuccess: () => {
      openPopup("댓글이 작성되었습니다.");
      initialize();
    },
  });
  const [commentValue, inputCommentValue, initialize] = useInput({
    comment: "",
    username: "",
    password: "",
  });

  const submitForm = useCallback(() => {
    if (commentValue.username === "") {
      return openPopup("이름을 입력해주세요.");
    }
    if (commentValue.password.length < 4) {
      return openPopup("비밀번호 네자리 이상 입력해주세요.");
    }
    if (commentValue.comment === "") {
      return openPopup("댓글 내용을 입력해주세요.");
    }
    writeComment(commentValue);
  }, [commentValue, writeComment, openPopup]);

  return (
    <div className="mt-10">
      <Text bold size="xl">
        댓글입력
      </Text>
      <div className="h-[20px]" />
      <Flex gap={3}>
        <Input
          placeholder="이름"
          name="username"
          onChange={inputCommentValue}
          value={commentValue.username}
        />
        <Input
          type="password"
          placeholder="비밀번호"
          name="password"
          onChange={inputCommentValue}
          value={commentValue.password}
        />
      </Flex>
      <div className="h-[10px]" />
      <TextArea
        placeholder="댓글을 입력해주세요"
        name="comment"
        value={commentValue.comment}
        onChange={inputCommentValue}
      />
      <div className="flex justify-end mt-5">
        <button
          onClick={submitForm}
          className="rounded-md px-7 py-2 bg-gray-500 text-white"
          disabled={isLoadingWrite}
        >
          테스트
        </button>
      </div>
    </div>
  );
};

export default CommentForm;
