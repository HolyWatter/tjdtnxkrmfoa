import { postApi } from "apis/apis";
import UnderLineInput from "components/shared/input/underline-input";
import SearchIcon from "components/svg/search-icon";
import useDebounce from "hooks/useDebounce";
import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { PostListType } from "models/post.interface";
import PostItemList from "components/post-list/PostListItem";

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchedPost, setSearchedPost] = useState<null | PostListType>(null);
  const keyword = searchParams.get("keyword");

  const inputKeyword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      searchParams.set("keyword", e.target.value);
      setSearchParams(searchParams);
    },
    [searchParams, setSearchParams]
  );

  const debounceValue = useDebounce(keyword ? keyword : "", 2000);

  const submitSearch = useCallback(async () => {
    const res = await postApi.searchPost(debounceValue);
    setSearchedPost(res);
  }, [debounceValue]);

  useEffect(() => {
    submitSearch();
  }, [submitSearch]);

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
          <PostItemList key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
