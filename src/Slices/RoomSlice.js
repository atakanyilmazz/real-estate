import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRooms = createAsyncThunk("room/fetchRooms", async () => {
  const response = await axios.get("http://localhost:5121/properties/getRooms");
  return response.data;
});

const initialState = {
  rooms: [],
  status: "idle",
  error: null,
};

const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRooms.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRooms.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.rooms = action.payload;
      })
      .addCase(fetchRooms.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default roomSlice.reducer;
