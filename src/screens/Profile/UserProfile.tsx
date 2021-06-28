import React, { FC, useCallback } from 'react';

import { Button, Center } from 'native-base';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

import { SCREEN_NAMES, STORAGE_KEYS } from '../../constants';
import { fetchUser } from '../../store/actions';
import { IScreenBase } from '../types';

const UserProfile: FC<IScreenBase> = ({ navigation }) => {
  const dispatch = useDispatch();

  const onEditPress = useCallback(() => {
    navigation.navigate(SCREEN_NAMES.editGroup);
  }, [navigation]);

  const onLogout = useCallback(async () => {
    await AsyncStorage.removeItem(STORAGE_KEYS.isLoggedIn);
    await AsyncStorage.removeItem(STORAGE_KEYS.userId);

    dispatch(fetchUser());

    navigation.reset({ index: 0, routes: [{ name: SCREEN_NAMES.authBasic }] });
  }, [dispatch, navigation]);

  return (
    <Center flex={1}>
      <Button variant="ghost" onPress={onEditPress}>Edit group</Button>
      <Button onPress={onLogout}>Logout</Button>
    </Center>
  );
};

export default UserProfile;
