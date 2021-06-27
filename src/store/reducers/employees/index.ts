import { createSlice } from '@reduxjs/toolkit';

import { EmployeeState } from '../../types';
import { fetchEmployees } from '../../actions';

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
