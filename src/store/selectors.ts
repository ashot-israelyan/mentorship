/* Employees Selectors */

import { createSelector } from '@reduxjs/toolkit';

import { IReduxState } from './types';

const settingsSelector = (state: IReduxState) => state.employees;

export const getEmployees = createSelector(
  settingsSelector,
  employees => employees.items,
);
