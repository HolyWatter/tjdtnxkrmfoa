import PostItemList from "components/shared/PostListItem";
import SearchForm from "components/search/SearchForm";
import useSearch from "components/search/hooks/useSearch";
import { useState } from "react";

const SearchPage = () => {
  const [searchValue, setSearchValue] = useState("");

  const changeValue = (debounceValue: string) => {
    setSearchValue(debounceValue);
  };
  const { data: searchedPost } = useSearch({
    searchValue: searchValue,
  });

  return (
    <div className="w-full flex flex-col items-center">
      <SearchForm changeValue={changeValue} />
      <div className="mt-10 w-full">
        <p className="pl-5">검색결과 {searchedPost?.postCount} 건</p>
        {searchedPost?.posts.map((item) => (
          <PostItemList key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
