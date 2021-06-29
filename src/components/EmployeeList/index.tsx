import React, { FC, useCallback, useEffect, useState } from 'react';

import { ListRenderItemInfo, VirtualizedList } from 'react-native';

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

  const renderItem = useCallback(({ item }: ListRenderItemInfo<Employee>) => {
    return  <EmployeeItem item={item} selected={selectedEmployees.has(item.id)} onPress={onEmployeeSelect} />;
  }, [onEmployeeSelect, selectedEmployees]);

  useEffect(() => {
    setEmployees([...selectedEmployees]);
  }, [selectedEmployees, setEmployees]);

  return (
    <VirtualizedList
      data={employees}
      initialNumToRender={5}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      getItemCount={getItemCount}
      getItem={getItem}
    />
  );
};

export default EmployeeList;
