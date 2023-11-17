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
  isLoadingSelector,
  endLoading,
  startLoading,
} from "../slices/universitiesSlice";
import Table from "../components/Table";
import { Box } from "@mui/material";
import SearchSection from "./TablePage/SearchSection";
import CurcularLoader from "../components/CurcularLoader";

const TablePageRoot = styled(Box)({
  marginTop: "20px",
});

function TablePage() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => isLoadingSelector(state));
  const countrySelect = useSelector((state) => countrySelectedSelector(state));
  const universitiesCollection = useSelector((state) =>
    universitiesSelector(state)
  );
  const searchText = useSelector((state) => searchTextSelector(state));
  const debouncedSearchText = useDebounce(searchText, 1000);

  useLayoutEffect(() => {
    dispatch(startLoading());
    axios.get(" http://universities.hipolabs.com/search").then((response) => {
      dispatch(endLoading());
      dispatch(setUniversities(response.data));
    });
  }, []);

  useEffect(() => {
    dispatch(startLoading());
    const countrySelectLabel = get(countrySelect, "label", "");
    axios
      .get(" http://universities.hipolabs.com/search", {
        params: {
          name: debouncedSearchText || null,
          country: countrySelectLabel || null,
        },
      })
      .then((response) => {
        dispatch(endLoading());
        dispatch(setUniversities(response.data));
      });
  }, [debouncedSearchText, countrySelect]);

  return (
    <TablePageRoot>
      <CurcularLoader isVisible={isLoading} />
      <SearchSection />
      <Table rows={universitiesCollection} />
    </TablePageRoot>
  );
}

export default TablePage;
