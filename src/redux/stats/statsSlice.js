import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  stats: [],
  isLoading: true,
};

export const fetchStats = createAsyncThunk('stats/fetchStats', async ({ lat, lon }) => {
  try {
    const response = await axios(
      `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=c821836f2d36b54c9d9432782ae78600`,
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
});

export const statsSlice = createSlice({
  name: 'stats',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStats.pending, (state) => {
        const newState = { ...state };
        newState.isLoading = true;
        return newState;
      })
      .addCase(fetchStats.fulfilled, (state, action) => {
        const newState = { ...state };
        newState.isLoading = false;
        newState.stats = action.payload;
        return newState;
      });
  },
});

export default statsSlice.reducer;
