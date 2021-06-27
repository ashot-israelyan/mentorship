import { createSlice } from '@reduxjs/toolkit';

import { EmployeeState } from '../types';
import { fetchEmployees } from '../actions';

const initialState: EmployeeState = {
  items: [],
  loading: false,
};

const employeeSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchEmployees.fulfilled, (state, action) => {
      state.items = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchEmployees.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchEmployees.rejected, state => {
      state.loading = false;
    });
  },
});

export default employeeSlice;
