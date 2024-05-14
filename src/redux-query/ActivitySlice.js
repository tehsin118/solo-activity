import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  AllActivities: [],
  SelectedTags: [],
  Categories: [],
};

const activityReduxSlice = createSlice({
  name: "activities",
  initialState,
  reducers: {
    setSelectedTag: (state, action) => {
      state.SelectedTags = action.payload;
    },
    setAllActivities: (state, action) => {
      state.AllActivities = action.payload;
    },
    setCategories: (state, action) => {
      state.Categories = action.payload;
    },
  },
});

export const { setAllActivities, setSelectedTag, setCategories } =
  activityReduxSlice.actions;

export const selectActivities = (state) => state?.activity?.AllActivities;
export const selectCategoires = (state) => state?.activity?.Categories;
export default activityReduxSlice.reducer;
