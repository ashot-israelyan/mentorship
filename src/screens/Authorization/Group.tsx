import React, { FC, useCallback, useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import { ActivityIndicator } from 'react-native';
import { Box, Button, Center, Stack } from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';

import { FormWrapper } from '../../containers';
import { EmployeeList } from '../../components';
import { useMemoSelector } from '../../hooks';
import { authorizationData, getEmployees } from '../../store/selectors';
import { fetchEmployees, fetchUser } from '../../store/actions';
import authorizationSlice from '../../store/reducers/authorization';
import { SCREEN_NAMES, STORAGE_KEYS } from '../../constants';
import fetchService from '../../services/api/fetchService';
import { IScreenBase } from '../types';

const Group: FC<IScreenBase> = ({ navigation }) => {
  const { employees, authData } = useMemoSelector(state => ({
    employees: getEmployees(state),
    authData: authorizationData(state),
  }));
  const dispatch = useDispatch();
  const [selectedEmployees, setSelectedEmployees] = useState<string[]>([]);

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  const updateSelectedEmployees = useCallback((ids: string[]) => {
    setSelectedEmployees(ids);
  }, []);

  const onSubmit = useCallback(async () => {
    const data = { group: selectedEmployees };
    dispatch(authorizationSlice.actions.updateGroup(data));

    const response = await fetchService.create('/users',{
      ...authData,
      ...data,
    });

    if (!response.id) {
      return;
    }

    await AsyncStorage.setItem(STORAGE_KEYS.isLoggedIn, 'true');
    await AsyncStorage.setItem(STORAGE_KEYS.userId, response.id);

    dispatch(fetchUser());

    navigation.reset({ index: 0, routes: [{ name: SCREEN_NAMES.profilePage }] });
    dispatch(authorizationSlice.actions.reset());
  }, [authData, dispatch, navigation, selectedEmployees]);

  if (!employees.length) {
    return (
      <Center flex={1}>
        <ActivityIndicator size="large" />
      </Center>
    );
  }

  return (
    <FormWrapper>
      <Stack flexDirection="column">
        <Box style={{ height: '92%' }}>
          <EmployeeList employees={employees} setEmployees={updateSelectedEmployees} />
        </Box>
        <Button onPress={onSubmit}>
          Save
        </Button>
      </Stack>
    </FormWrapper>
  );
};

export default Group;
