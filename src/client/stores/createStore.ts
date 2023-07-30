import { configureStore } from '@reduxjs/toolkit';
import { bandalartDetailSlice } from './bandalartDetailSlice';
import { bandalartCellsSlice } from './bandalartCellsSlice';

export type RootState = {
  bandalartDetail: ReturnType<typeof bandalartDetailSlice.reducer>;
  bandalartCells: ReturnType<typeof bandalartCellsSlice.reducer>;
};

export const createStore = (preloadedState: RootState) =>
  configureStore({
    reducer: {
      bandalartDetail: bandalartDetailSlice.reducer,
      bandalartCells: bandalartCellsSlice.reducer,
    },
    preloadedState: preloadedState,
  });
