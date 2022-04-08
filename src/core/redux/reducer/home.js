import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
  searchResult: [],
};

const ReduxSlice = createSlice({
  name: "HOME",
  initialState,
  reducers: {
    setSearchResult: (state, action) => {
      state.searchResult = action.payload;
    },
  },
});

export const { setSearchResult } = ReduxSlice.actions;
export const useHome = () => useSelector((RootState) => RootState.home);
export default ReduxSlice.reducer;
