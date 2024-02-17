import { createSlice } from "@reduxjs/toolkit";
import { fetchGiphy } from "../thunks/fetchGiphy";
import {
  fetchingRedeucer,
  isFetchingReducer,
  rejectReducer,
} from "../../utils/reducerUtil";

interface stateProps {
  isFetching: boolean;
  isLoading: boolean;
  data: Array<any>;
  error: string;
}

const initialState: stateProps = {
  isFetching: false,
  isLoading: false,
  data: [],
  error: "",
};

export const giphySlice = createSlice({
  name: "giphy",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchGiphy.pending, isFetchingReducer);
    builder.addCase(fetchGiphy.fulfilled, fetchingRedeucer);
    builder.addCase(fetchGiphy.rejected, rejectReducer);
  },
});
