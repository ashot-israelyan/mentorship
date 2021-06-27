import { createAsyncThunk } from '@reduxjs/toolkit';

import employeeService from '../../services/api/employeeService';

export const fetchEmployees = createAsyncThunk(
  'employees/fetchByIdStatus',
  () => employeeService.getAll(),
);
