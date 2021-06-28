import React, { FC, useCallback, useEffect, useState } from 'react';

import { VirtualizedList } from 'react-native';

import { IEmployeesList } from './types';
import EmployeeItem from './EmployeeItem';
import { Employee } from '../../store/types';

const EmployeeList: FC<IEmployeesList> = ({ employees, setEmployees }) => {
  const [selectedEmployees, setSelectedEmployees] = useState(new Set<string>());
  const getItemCount = useCallback((data: Employee[]) => {
    return data.length;
  }, []);

  const getItem = useCallback((data: Employee[], index: number) => data[index], []);

  const onEmployeeSelect = useCallback((id: string) => {
    setSelectedEmployees(prevSelectedEmployees => {
      const newSet = new Set(prevSelectedEmployees);

      newSet[newSet.has(id) ? 'delete' : 'add'](id);
      return newSet;
    });
  }, []);

  useEffect(() => {
    setEmployees([...selectedEmployees]);
  }, [selectedEmployees, setEmployees]);

  return (
    <VirtualizedList
      data={employees}
      initialNumToRender={10}
      renderItem={({ item }) => <EmployeeItem item={item} selected={selectedEmployees.has(item.id)} onPress={onEmployeeSelect} />}
      keyExtractor={item => item.id}
      getItemCount={getItemCount}
      getItem={getItem}
    />
  );
};

export default EmployeeList;
