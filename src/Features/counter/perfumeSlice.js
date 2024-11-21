import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPerfumes = createAsyncThunk(
  "perfumes/fetchPerfumes",
  async () => {
    const response = await fetch("/api/perfumes");
    if (!response.ok) {
      throw new Error("Failed to fetch perfumes");
    }
    return response.json();
  }
);

const perfumeSlice = createSlice({
  name: "perfumes",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPerfumes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPerfumes.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchPerfumes.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default perfumeSlice.reducer;
