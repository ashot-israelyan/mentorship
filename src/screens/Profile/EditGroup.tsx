import React, { FC, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { Box, Stack } from 'native-base';

import { fetchEmployees } from '../../store/actions';
import { useMemoSelector } from '../../hooks';
import { getUserGroup } from '../../store/selectors';
import { EmployeeList } from '../../components';

const EditGroup: FC = () => {
  const employees = useMemoSelector(getUserGroup);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  return (
    <Stack flexDirection="column">
      <Box style={{ height: '92%' }}>
        <EmployeeList employees={employees} setEmployees={() => null} />
      </Box>
    </Stack>
  );
};

export default EditGroup;
