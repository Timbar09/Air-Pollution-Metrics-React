import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  stats: [],
  isLoading: true,
};

export const statsSlice = createSlice({
  name: 'stats',
  initialState,
  reducers: {},
});

export default statsSlice.reducer;
