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

    const { components } = response.data.list[0];

    const componentNames = {
      co: 'Carbon monoxide',
      no: 'Nitrogen monoxide',
      no2: 'Nitrogen dioxide',
      o3: 'Ozone',
      so2: 'Sulfur dioxide',
      pm2_5: 'Fine particulate matter (PM2.5)',
      pm10: 'Coarse particulate matter (PM10)',
      nh3: 'Ammonia',
    };

    const componentArray = Object.entries(components).map(([key, value]) => ({
      name: componentNames[key],
      value,
    }));

    return componentArray;
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
