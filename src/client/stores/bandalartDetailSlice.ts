import { createSlice } from '@reduxjs/toolkit';
import { BandalartDetail } from '../../types/BandalartDetail';

export const bandalartDetailSlice = createSlice<
  BandalartDetail,
  Record<string, never>,
  'bandalartDetail'
>({
  name: 'bandalartDetail',
  initialState: {
    key: '',
    title: '',
    cellKey: '',
    isCompleted: false,
    dueDate: null,
    shareKey: null,
  },
  reducers: {},
});
