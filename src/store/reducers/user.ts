import { createSlice } from '@reduxjs/toolkit';

import { UserState } from '../types';
import { fetchUser } from '../actions';

const initialState: UserState = {
  item: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.item = {
        ...action.payload,
        group: action.payload.group.split(','),
      };
    });
  },
});

export default userSlice;
