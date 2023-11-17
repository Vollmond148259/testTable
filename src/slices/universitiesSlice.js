import { createSlice } from "@reduxjs/toolkit";

export const universitiesSelector = (state) => state.universities.universities;
export const searchTextSelector = (state) => state.universities.searchText;
export const countrySelectedSelector = (state) =>
  state.universities.countrySelected;
export const isLoadingSelector = (state) => state.universities.isLoading;

const initialState = {
  universities: [],
  searchText: "",
  countrySelected: "",
  isLoading: false,
};

const slice = createSlice({
  name: "universities",
  initialState,
  reducers: {
    setDefaultValues: (state) => {
      state = initialState;
    },
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
    setUniversities: (state, action) => {
      state.universities = action.payload;
    },
    setCountrySelected: (state, action) => {
      state.countrySelected = action.payload;
    },
    startLoading: (state) => {
      state.isLoading = true;
    },
    endLoading: (state) => {
      state.isLoading = false;
    },
  },
});
export const {
  setDefaultValues,
  setCountrySelected,
  setSearchText,
  setUniversities,
  startLoading,
  endLoading,
} = slice.actions;

export default slice.reducer;
