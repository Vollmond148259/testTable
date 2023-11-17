import { createSlice } from "@reduxjs/toolkit";

export const universitiesSelector = (state) => state.universities.universities;
export const searchTextSelector = (state) => state.universities.searchText;
export const countrySelectedSelector = (state) =>
  state.universities.countrySelected;

const initialState = {
  universities: [],
  searchText: "",
  countrySelected: "",
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
  },
});
export const {
  setDefaultValues,
  setCountrySelected,
  setSearchText,
  setUniversities,
} = slice.actions;

export default slice.reducer;
