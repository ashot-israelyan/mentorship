import React, { FC, useCallback, useMemo } from 'react';

import { StyleSheet } from 'react-native';
import { Avatar, Button, Stack, useTheme } from 'native-base';

import EmployeeInfo from './EmployeeInfo';
import { generateEmployeeInfo } from '../../utils';
import { IEmployeeItem } from '../types';

const EmployeeItem: FC<IEmployeeItem> = ({ item, selected = false, onPress, onLongPress }) => {
  const { colors } = useTheme();
  const employeeInfo = useMemo(() => generateEmployeeInfo(item), [item]);

  const onEmployeePress = useCallback(() => {
    if (typeof onPress === 'function') {
      onPress(item.id);
    }
  }, [item.id, onPress]);

  return (
    <Button onLongPress={onLongPress} onPress={onEmployeePress} variant="unstyled">
      <Stack width="100%" direction="row" style={[styles.container, { backgroundColor: selected ? colors.green[500] : 'transparent' }]}>
        <Avatar source={{ uri: item.profile_picture }} size="md">{item.first_name.substring(0, 1)}</Avatar>
        <Stack direction="column" style={styles.username}>
          {employeeInfo.map(el => (
            <EmployeeInfo key={el.id} id={el.id} title={el.title} label={el.label} subLabel={el.subLabel} />
          ))}
        </Stack>
      </Stack>
    </Button>
  );
};

const styles = StyleSheet.create({
  username: {
    marginLeft: 10,
  },
  container: {
    padding: 10,
    borderRadius: 4,
  },
});

export default EmployeeItem;
