import { createSelector } from '@reduxjs/toolkit';

import { IReduxState } from '../types';
import { getEmployees } from './employees';

const userSelector = (state: IReduxState) => state.user;

export const getUser = createSelector(
  userSelector,
  user => user.item,
);

export const getUserGroup = createSelector(
  [getUser, getEmployees],
  (user, employees) => {
    return employees.filter(el => user?.group.includes(el.id));
  },
);
