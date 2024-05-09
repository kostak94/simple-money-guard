import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUsdEuroValues } from "./currencyApi";
import {
  getCurrencyDataFromLocalStorage,
  setDataToLocalStorage,
} from "../../helpers/currencyApiHelpers";

export const getCurrency = createAsyncThunk("currency", async (_, thunkAPI) => {
  try {
    const savedData = getCurrencyDataFromLocalStorage();
    if (savedData) return savedData;
    const data = await fetchUsdEuroValues();
    setDataToLocalStorage(data);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
