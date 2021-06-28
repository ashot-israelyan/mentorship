import { createAsyncThunk } from '@reduxjs/toolkit';

import fetchService from '../../services/api/fetchService';

export const fetchEmployees = createAsyncThunk(
  'employees/fetchById',
  () => fetchService.request('/employees'),
);
