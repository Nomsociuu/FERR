// trendingStore.js
import { configureStore } from '@reduxjs/toolkit';
import trendingReducer from './reducers/trendingReducer';

export const store = configureStore({
  reducer: {
    trending: trendingReducer,
  },
});
