import { createSlice } from '@reduxjs/toolkit';
import { BandalartCell } from '../../types/BandalartCell';

export const bandalartTreeSlice = createSlice<
  BandalartCell | null,
  Record<string, never>,
  'bandalartTree'
>({
  name: 'bandalartTree',
  initialState: null,
  reducers: {},
});
