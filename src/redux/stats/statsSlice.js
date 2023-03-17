import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import countriesData from '../../countriesArray';

const initialState = {
  stats: [],
  country: '',
  capital: '',
  isLoading: true,
  isModalOpen: false,
  searchFilter: false,
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

    const { country, capital } = countriesData.find(
      (data) => data.latitude.toString() === lat && data.longitude.toString() === lon,
    );

    return [country, capital, componentArray];
  } catch (error) {
    return error.message;
  }
});

export const statsSlice = createSlice({
  name: 'stats',
  initialState,
  reducers: {
    toggleModal: (state) => {
      const newState = { ...state };
      newState.isModalOpen = !newState.isModalOpen;
      return newState;
    },
    filterCountry: (state, action) => {
      const newState = { ...state };
      if (action.payload) {
        newState.searchFilter = false;
      } else {
        newState.searchFilter = true;
      }
      return newState;
    },
    filterCapital: (state) => {
      const newState = { ...state };
      newState.searchFilter = false;
      return newState;
    },
  },
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
        const [country, capital, array] = action.payload;
        newState.country = country;
        newState.capital = capital;
        newState.stats = array;
        return newState;
      });
  },
});

export const { toggleModal, filterCapital, filterCountry } = statsSlice.actions;

export default statsSlice.reducer;
