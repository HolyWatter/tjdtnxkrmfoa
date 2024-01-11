import Text from "components/shared/Text";

interface Props {
  username: string;
  createdAt: string;
  comment: string;
}

const Comment = ({ username, createdAt, comment }: Props) => {
  return (
    <div className="py-5">
      <Text>{username}</Text>
      <Text size="xs" color="gray-500">
        {createdAt}
      </Text>
      <div className="h-5" />
      <Text>{comment}</Text>
      <div className="border-[1px] mt-5 rounded-xl"></div>
    </div>
  );
};

export default Comment;
