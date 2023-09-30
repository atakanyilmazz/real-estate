import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPropertyFeature = createAsyncThunk(
  "propertyFeature/fetchPropertyFeature",
  async () => {
    const response = await axios.get("http://localhost:5121/propertyFeature");
    return response.data;
  }
);

const initialState = {
  propertyFeatures: [],
  status: "idle",
  error: null,
};

const propertyFeatureSlice = createSlice({
  name: "propertyFeature",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPropertyFeature.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPropertyFeature.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.propertyFeatures = action.payload;
      })
      .addCase(fetchPropertyFeature.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default propertyFeatureSlice.reducer;
