import { useDispatch, useSelector } from "react-redux";

import {
  setSearchText,
  setCountrySelected,
  searchTextSelector,
} from "../../slices/universitiesSlice";
import { AUTOCOMPLETE_ITEMS } from "./searchSection/constants";

import AutoCompleteField from "../../components/AutoCompleteField";
import SearchField from "../../components/SearchField";
import { Stack } from "@mui/material";
import styled from "@emotion/styled";

const SearchSectionRoot = styled(Stack)({
  margin: "10px",
});

const allowStartWhitespace = (searchWord) => {
  if (searchWord[0] === " ") {
    return searchWord.trim();
  }
  return searchWord;
};

function SearchSection() {
  const dispatch = useDispatch();
  const searchText = useSelector((state) => searchTextSelector(state));

  const changeWithoutSpace = (word) => {
    const trimWord = allowStartWhitespace(word);
    dispatch(setSearchText(trimWord));
  };

  return (
    <SearchSectionRoot direction="row" gap="20px">
      <SearchField
        label={"Search"}
        value={searchText}
        size={"small"}
        onChange={(e) => changeWithoutSpace(e.target.value)}
      />
      <AutoCompleteField
        onChange={(event, newValue) => {
          dispatch(setCountrySelected(newValue));
        }}
        items={AUTOCOMPLETE_ITEMS}
      />
    </SearchSectionRoot>
  );
}

export default SearchSection;
