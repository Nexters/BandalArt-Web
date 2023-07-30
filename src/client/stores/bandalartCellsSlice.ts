import { createSlice } from '@reduxjs/toolkit';
import { BandalartCell } from '../../types/BandalartCell';

export const bandalartCellsSlice = createSlice<
  BandalartCell[],
  Record<string, never>,
  'bandalartCells'
>({
  name: 'bandalartCells',
  initialState: [],
  reducers: {},
});
