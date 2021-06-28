import React, { FC, useCallback } from 'react';

import { Button, Center } from 'native-base';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import Share from 'react-native-share';

import { SCREEN_NAMES, STORAGE_KEYS } from '../../constants';
import { fetchUser } from '../../store/actions';
import { IScreenBase } from '../types';
import { useMemoSelector } from '../../hooks';
import { getUser } from '../../store/selectors';

const UserProfile: FC<IScreenBase> = ({ navigation }) => {
  const dispatch = useDispatch();
  const user = useMemoSelector(getUser);

  const onEditPress = useCallback(() => {
    navigation.navigate(SCREEN_NAMES.editGroup);
  }, [navigation]);

  const onLogout = useCallback(async () => {
    await AsyncStorage.removeItem(STORAGE_KEYS.isLoggedIn);
    await AsyncStorage.removeItem(STORAGE_KEYS.userId);

    dispatch(fetchUser());

    navigation.reset({ index: 0, routes: [{ name: SCREEN_NAMES.authBasic }] });
  }, [dispatch, navigation]);

  const onSharePress = useCallback(() => {
    if (!user) {
      return;
    }

    Share.shareSingle({
      title: `${user.firstName} ${user.lastName}`,
      message: `
        Department: ${user.department}
        Job Title: ${user.jobTitle}
      `,
      social: Share.Social.SMS,
    });
  }, [user]);

  return (
    <Center flex={1}>
      <Button variant="ghost" onPress={onEditPress}>Edit group</Button>
      {user?.id && (
        <Button variant="link" onPress={onSharePress}>Share profile</Button>
      )}
      <Button onPress={onLogout}>Logout</Button>
    </Center>
  );
};

export default UserProfile;
