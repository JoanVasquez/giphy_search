import { createAsyncThunk } from "@reduxjs/toolkit";
import { GiphyService } from "../../services/giphyService";

export const fetchGiphy = createAsyncThunk(
  "giphy/fetch",
  async (fetchParams: any) => {
    console.log(fetchParams)
    const iCrudService = new GiphyService(fetchParams);
    return iCrudService.findAll();
  }
);
