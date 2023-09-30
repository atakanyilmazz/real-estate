import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProperties = createAsyncThunk(
  "property/fetchProperties",
  async (payload) => {
    const response = await axios.post(
      "http://localhost:5121/properties",
      payload
    );
    return response.data;
  }
);

export const createPropery = createAsyncThunk(
  "property/createPropery",
  async (payload) => {
    console.log("Atii 23", payload);
    const response = await axios.post(
      "http://localhost:5121/properties/create",
      payload
    );
    return response.data;
  }
);

const initialState = {
  properties: [],
  status: "idle",
  error: null,
};

const PropertySlice = createSlice({
  name: "property",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProperties.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProperties.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.properties = action.payload;
      })
      .addCase(fetchProperties.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(createPropery.pending, (state) => {})
      .addCase(createPropery.fulfilled, (state, action) => {})
      .addCase(createPropery.rejected, (state, action) => {});
  },
});

export default PropertySlice.reducer;
//   .post("")
