import { configureStore } from "@reduxjs/toolkit";

import pcBuildReducer from "./pcBuild/pcBuildSlice";
import { apiSlice } from "./api/apiSlice";
export const store = configureStore({
  reducer: {
    pcBuild: pcBuildReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
