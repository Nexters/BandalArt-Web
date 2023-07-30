import { configureStore } from '@reduxjs/toolkit';
import { bandalartDetailSlice } from './bandalartDetailSlice';
import { bandalartTreeSlice } from './bandalartTreeSlice';

export type RootState = {
  bandalartDetail: ReturnType<typeof bandalartDetailSlice.reducer>;
  bandalartTree: ReturnType<typeof bandalartTreeSlice.reducer>;
};

export const createStore = (preloadedState: RootState) =>
  configureStore({
    reducer: {
      bandalartDetail: bandalartDetailSlice.reducer,
      bandalartTree: bandalartTreeSlice.reducer,
    },
    preloadedState: preloadedState,
  });
