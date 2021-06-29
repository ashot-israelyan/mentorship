import React, { FC, useCallback, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { Box, Stack } from 'native-base';
import { Alert } from 'react-native';

import { fetchEmployees, fetchUser } from '../../store/actions';
import { useMemoSelector } from '../../hooks';
import { getUser, getUserGroupEmployees } from '../../store/selectors';
import { DraggableList } from '../../components';
import fetchService from '../../services/api/fetchService';
import { User } from '../../store/types';

const EditGroup: FC = () => {
  const { employees, user } = useMemoSelector(state => ({
    employees: getUserGroupEmployees(state),
    user: getUser(state),
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  const setEmployees = useCallback(async (ids: string[]) => {
    const response = await fetchService.update<Partial<User>>(`/users/${user?.id}`, { group: ids });

    const message = response.id ? 'User successfully updated' : 'Something went wrong';

    Alert.alert(message);

    if (response.id) {
      dispatch(fetchUser());
    }
  }, [dispatch, user?.id]);

  return (
    <Stack flexDirection="column">
      <Box style={{ height: '92%' }}>
        <DraggableList employees={employees} setEmployees={setEmployees} />
      </Box>
    </Stack>
  );
};

export default EditGroup;
