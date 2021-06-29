import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AuthorizationState, BasicFormValues, JobFormValues } from '../types';

const initialState: AuthorizationState = {
  firstName: '',
  lastName: '',
  profilePicture: '',
  currentLocation: '',
  department: '',
  jobTitle: '',
  group: [],
};

const authorizationSlice = createSlice({
  name: 'authorization',
  initialState,
  reducers: {
    updateBasic: (state, { payload }: PayloadAction<BasicFormValues>) => {
      state.firstName = payload.firstName;
      state.lastName = payload.lastName;
      state.profilePicture = payload.profilePicture;
      state.currentLocation = payload.currentLocation;
    },
    updateJob: (state, {payload}: PayloadAction<JobFormValues>) => {
      state.jobTitle = payload.jobTitle;
      state.department = payload.department;
    },
    updateGroup: (state, { payload }: PayloadAction<Pick<AuthorizationState, 'group'>>) => {
      state.group = payload.group;
    },
    reset: () => {
      return initialState;
    },
  },
});

export default authorizationSlice;
