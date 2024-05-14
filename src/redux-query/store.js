import { configureStore } from "@reduxjs/toolkit";
import ActivitySlice from "./ActivitySlice";
export const store = configureStore({
  reducer: {
    activity: ActivitySlice,
  },
});
