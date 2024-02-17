import { configureStore } from "@reduxjs/toolkit";
import { giphySlice } from "./slices/giphySlice";

export const store = configureStore({
  reducer: {
    [giphySlice.reducerPath]: giphySlice.reducer,
  },
});
