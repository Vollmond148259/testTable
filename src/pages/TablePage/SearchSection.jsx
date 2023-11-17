import { useDispatch } from "react-redux";

import {
  setSearchText,
  setCountrySelected,
} from "../../slices/universitiesSlice";
import { autoCompleteItems } from "./searchSection/constants";

import AutoCompleteField from "../../components/AutoCompleteField";
import SearchField from "../../components/SearchField";
import { Stack } from "@mui/material";
import styled from "@emotion/styled";

const SearchSectionRoot = styled(Stack)({
  margin: "10px",
});

function SearchSection() {
  const dispatch = useDispatch();
  return (
    <SearchSectionRoot direction="row" gap="20px">
      <SearchField
        label={"Search"}
        onChange={(e) => {
          dispatch(setSearchText(e.target.value));
        }}
      />
      <AutoCompleteField
        onChange={(event, newValue) => {
          dispatch(setCountrySelected(newValue));
        }}
        items={autoCompleteItems}
      />
    </SearchSectionRoot>
  );
}

export default SearchSection;
