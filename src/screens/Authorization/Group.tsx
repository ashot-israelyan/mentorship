import React, { FC, useCallback, useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import { ActivityIndicator } from 'react-native';

import { FormWrapper } from '../../containers';
import { EmployeeList } from '../../components';
import { useMemoSelector } from '../../hooks';
import { getEmployees } from '../../store/selectors';
import { fetchEmployees } from '../../store/actions';

const Group: FC = () => {
  const employees = useMemoSelector(getEmployees);
  const dispatch = useDispatch();
  const [selectedEmployees, setSelectedEmployees] = useState<string[]>([]);

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  const updateSelectedEmployees = useCallback((ids: string[]) => {
    setSelectedEmployees(ids);
  }, []);

  if (!employees.length) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <FormWrapper>
      <EmployeeList employees={employees} setEmployees={updateSelectedEmployees} />
    </FormWrapper>
  );
};

export default Group;
