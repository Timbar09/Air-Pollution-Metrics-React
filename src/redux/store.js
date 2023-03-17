import { configureStore } from '@reduxjs/toolkit';

import statsReducers from './stats/statsSlice';

const store = configureStore({
  reducer: {
    stats: statsReducers,
  },
});

export default store;
