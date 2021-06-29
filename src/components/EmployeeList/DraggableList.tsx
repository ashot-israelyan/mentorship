import React, { FC, useCallback, useEffect, useState } from 'react';

import DraggableFlatList, { DragEndParams, RenderItemParams } from 'react-native-draggable-flatlist';

import { IEmployeesDraggableList } from '../types';
import { Employee } from '../../store/types';
import { EmployeeItem } from '../Employees';

const DraggableList: FC<IEmployeesDraggableList> = ({ employees, setEmployees }) => {
  const [localEmployees, setLocalEmployees] = useState(employees);

  useEffect(() => {
    setLocalEmployees(employees);
  }, [employees]);

  const renderItem = useCallback(({ item, drag }: RenderItemParams<Employee>) => {
    return <EmployeeItem item={item} onLongPress={drag} />;
  }, []);

  const onDragEnd = useCallback(({ data }: DragEndParams<Employee>) => {
    setLocalEmployees(data);
    setEmployees(data.map(el => el.id));
  }, [setEmployees]);

  return (
    <DraggableFlatList
      data={localEmployees}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      onDragEnd={onDragEnd}
    />
  );
};

export default DraggableList;
