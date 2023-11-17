import React, { useLayoutEffect, useEffect } from "react";
import axios from "axios";
import styled from "@emotion/styled";
import isEmpty from "lodash/isEmpty";
import get from "lodash/get";
import { useSelector, useDispatch } from "react-redux";

import useDebounce from "../hooks/useDebounce";
import {
  setUniversities,
  universitiesSelector,
  searchTextSelector,
  countrySelectedSelector,
} from "../slices/universitiesSlice";
import Table from "../components/Table";
import { Box } from "@mui/material";
import SearchSection from "./TablePage/SearchSection";

const TablePageRoot = styled(Box)({
  marginTop: "20px",
});

function TablePage() {
  const dispatch = useDispatch();
  const countrySelect = useSelector((state) => countrySelectedSelector(state));
  const universitiesCollection = useSelector((state) =>
    universitiesSelector(state)
  );
  const searchText = useSelector((state) => searchTextSelector(state));
  const debouncedSearchText = useDebounce(searchText, 1000);

  useLayoutEffect(() => {
    axios
      .get(" https://universities.hipolabs.com/search")
      .then((response) => dispatch(setUniversities(response.data)));
  }, []);

  useEffect(() => {
    if (!isEmpty(debouncedSearchText) || !isEmpty(countrySelect)) {
      const countrySelectLabel = get(countrySelect, "label", "");
      axios
        .get(" https://universities.hipolabs.com/search", {
          params: {
            name: debouncedSearchText || null,
            country: countrySelectLabel,
          },
        })
        .then((response) => dispatch(setUniversities(response.data)));
    }
  }, [debouncedSearchText, countrySelect]);
  return (
    <TablePageRoot>
      <SearchSection />
      <Table rows={universitiesCollection} />
    </TablePageRoot>
  );
}

export default TablePage;
