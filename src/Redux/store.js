import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "@/Redux/api/apiSlice";
import pcBuildReducer from "./buildPc/buildpcSlice";
export const store = configureStore({
  reducer: {
    pcBuild: pcBuildReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
