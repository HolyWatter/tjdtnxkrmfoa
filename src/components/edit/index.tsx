import InputPostValues from "components/write/InputPostValues";
import useGetPost from "hooks/useGetPost";
import { useParams } from "react-router-dom";

const Edit = () => {
  const { id = "" } = useParams();

  const { data: post } = useGetPost(id);

  return (
    <>
      {post ? (
        <InputPostValues
          onSubmit={() => {}}
          editValue={{ content: post.content, title: post.title }}
        />
      ) : null}
    </>
  );
};

export default Edit;
