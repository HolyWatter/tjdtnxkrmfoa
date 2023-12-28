import UnderLineInput from "components/shared/input/UnderlineInput";
import SearchIcon from "components/svg/search-icon";
import useDebounce from "hooks/useDebounce";
import { useCallback, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

interface Props {
  changeValue: (debounceValue: string) => void;
}

const SearchForm = ({ changeValue }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");

  const inputKeyword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      searchParams.set("keyword", e.target.value);
      setSearchParams(searchParams);
    },
    [searchParams, setSearchParams]
  );

  const debounceValue = useDebounce(keyword ? keyword : "", 800);

  useEffect(() => {
    changeValue(debounceValue);
  }, [debounceValue, changeValue]);

  return (
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
  );
};

export default SearchForm;
