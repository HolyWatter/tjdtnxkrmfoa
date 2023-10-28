import { postApi } from "apis/apis";
import UnderLineInput from "components/input/underline-input";
import PostItemList from "components/post-item/list";
import SearchIcon from "components/svg/search-icon";
import useDebounce from "hooks/useDebounce";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { PostListType } from "types/post.interface";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchedPost, setSearchedPost] = useState<null | PostListType>(null);
  const keyword = searchParams.get("keyword");

  const inputKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    searchParams.set("keyword", e.target.value);
    setSearchParams(searchParams);
  };

  const debounceValue = useDebounce(keyword ? keyword : "", 1000);

  const submitSearch = async () => {
    const res = await postApi.searchPost(debounceValue);
    setSearchedPost(res);
  };

  useEffect(() => {
    submitSearch();
  }, [debounceValue]);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex w-2/3 mt-5">
        <UnderLineInput
          placeholder="검색어를 입력해주세요."
          value={keyword as string}
          onChange={inputKeyword}
        />
        <button>
          <SearchIcon />
        </button>
      </div>
      <div className="mt-10">
        <p className="pl-5">검색결과 {searchedPost?.postCount} 건</p>
        {searchedPost?.posts.map((item) => (
          <PostItemList {...item} />
        ))}
      </div>
    </div>
  );
};

export default Search;
