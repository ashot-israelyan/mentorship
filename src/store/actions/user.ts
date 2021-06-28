import { createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-community/async-storage';

import fetchService from '../../services/api/fetchService';
import { STORAGE_KEYS } from '../../constants';

export const fetchUser = createAsyncThunk(
  'user/fetchById',
  async() => {
    const userId = await AsyncStorage.getItem(STORAGE_KEYS.userId);
    return fetchService.request(`/users/${userId}`);
  },
);
