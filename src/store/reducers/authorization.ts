import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AuthorizationState } from '../types';

const initialState: AuthorizationState = {
  firstName: '',
  lastName: '',
  profilePicture: '',
  currentLocation: '',
};

const authorizationSlice = createSlice({
  name: 'authorization',
  initialState,
  reducers: {
    updateBasic: (state, {
      payload: {
        firstName,
        lastName,
        profilePicture,
        currentLocation,
      },
    }: PayloadAction<Pick<AuthorizationState, 'firstName' | 'lastName' | 'profilePicture' | 'currentLocation'>>) => {
      state.firstName = firstName;
      state.lastName = lastName;
      state.profilePicture = profilePicture;
      state.currentLocation = currentLocation;
    },
  },
});

export default authorizationSlice;
