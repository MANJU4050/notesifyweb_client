import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    favourite: {
      reducer(state) {
        return !state;
      },
    },
  },
});

export const favourites = (state) => state.favourites;
export const { favourite } = favouritesSlice.actions;
export default favouritesSlice.reducer;
