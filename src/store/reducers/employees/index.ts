import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import employeeService from '../../../services/api/employeeService';
import { EmployeeState } from './types';

// First, create the thunk
export const fetchEmployees = createAsyncThunk(
  'employees/fetchByIdStatus',
  () => employeeService.getAll(),
);

const initialState: EmployeeState = {
  items: [],
};

const employeeSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchEmployees.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

export default employeeSlice;
