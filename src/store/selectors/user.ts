import { createSelector } from '@reduxjs/toolkit';

import { IReduxState } from '../types';
import { getEmployees } from './employees';
import { mapOrder } from '../../utils';

const userSelector = (state: IReduxState) => state.user;

export const getUser = createSelector(
  userSelector,
  user => user.item,
);

export const getUserGroupEmployees = createSelector(
  [getUser, getEmployees],
  (user, employees) => {
    if (!user) {
      return [];
    }
    const filteredEmployees = employees.filter(el => user?.group.includes(el.id));

    return mapOrder(filteredEmployees, user.group, 'id');
  },
);

export const getUserGroup = createSelector(
  getUser,
  user => user?.group || [],
);
