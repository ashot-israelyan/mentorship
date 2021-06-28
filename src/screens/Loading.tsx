import React, { FC, useEffect } from 'react';

import { ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import { Center } from '../components';
import { IScreenBase } from './types';
import { SCREEN_NAMES, STORAGE_KEYS } from '../constants';

const Loading: FC<IScreenBase> = ({ navigation }) => {
  useEffect(() => {
    const checkLoginState = async () => {
      const isLoggedIn = await AsyncStorage.getItem(STORAGE_KEYS.isLoggedIn) === 'true';

      const screenToNavigate = isLoggedIn ? SCREEN_NAMES.profilePage : SCREEN_NAMES.authBasic;

      setTimeout(() => {
        navigation.replace(screenToNavigate);
      }, 500);
    };

    checkLoginState();
  }, [navigation]);

  return (
    <Center>
      <ActivityIndicator size="large" />
    </Center>
  );
};

export default Loading;
