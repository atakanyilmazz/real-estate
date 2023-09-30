import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCities = createAsyncThunk(
  "city/fetchCities",
  async (countryId) => {
    const response = await axios.get(
      `http://localhost:5121/Location/cities/${countryId}`
    );
    return response.data;
  }
);

const initialState = {
  cities: [],
  status: "idle",
  error: null,
};

const citySlice = createSlice({
  name: "city",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCities.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCities.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cities = action.payload;
      })
      .addCase(fetchCities.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default citySlice.reducer;
