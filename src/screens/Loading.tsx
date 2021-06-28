import React, { FC, useEffect } from 'react';

import { ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Center } from 'native-base';
import { useDispatch } from 'react-redux';

import { IScreenBase } from './types';
import { SCREEN_NAMES, STORAGE_KEYS } from '../constants';
import { fetchUser } from '../store/actions';

const Loading: FC<IScreenBase> = ({ navigation }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const checkLoginState = async () => {
      const isLoggedIn = await AsyncStorage.getItem(STORAGE_KEYS.isLoggedIn) === 'true';

      if (isLoggedIn) {
        dispatch(fetchUser());
      }

      const screenToNavigate = isLoggedIn ? SCREEN_NAMES.profilePage : SCREEN_NAMES.authBasic;

      setTimeout(() => {
        navigation.replace(screenToNavigate);
      }, 500);
    };

    checkLoginState();
  }, [dispatch, navigation]);

  return (
    <Center flex={1}>
      <ActivityIndicator size="large" />
    </Center>
  );
};

export default Loading;
