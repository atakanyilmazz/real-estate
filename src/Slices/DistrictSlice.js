import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchDistricts = createAsyncThunk(
  "district/fetchDistricts",
  async (cityId) => {
    const response = await axios.get(
      `http://localhost:5121/Location/districts/${cityId}`
    );
    return response.data;
  }
);

const initialState = {
  districts: [],
  status: "idle",
  error: null,
};

const districtSlice = createSlice({
  name: "district",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDistricts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchDistricts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.districts = action.payload;
      })
      .addCase(fetchDistricts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default districtSlice.reducer;
