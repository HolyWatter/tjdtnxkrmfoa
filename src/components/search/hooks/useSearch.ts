import { postApi } from "apis/apis/postApi";
import { PostListType } from "models/post";
import { useQuery } from "react-query";

interface Props {
  searchValue: string;
}

const useSearch = ({ searchValue }: Props) => {
  const { data } = useQuery<PostListType>(
    ["search", searchValue],
    () => postApi.searchPost(searchValue),
    {}
  );

  return { data };
};

export default useSearch;
