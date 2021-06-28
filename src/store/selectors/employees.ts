import { createSelector } from '@reduxjs/toolkit';

import { IReduxState } from '../types';

const employeeSelector = (state: IReduxState) => state.employees;

export const getEmployees = createSelector(
  employeeSelector,
  employees => employees.items,
);
