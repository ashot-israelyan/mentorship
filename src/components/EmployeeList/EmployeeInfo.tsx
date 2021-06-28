import React, { FC } from 'react';

import { Stack, Text } from 'native-base';

import { IEmployeeInfo } from './types';

const EmployeeInfo: FC<IEmployeeInfo> = ({ title, label, subLabel = null }) => {
return (
  <Stack direction="row" alignItems="center">
    <Text fontSize="md" bold={true}>{title}</Text>
    <Text fontSize="sm" style={{ marginLeft: 10 }}>
      {label} {subLabel !== null ? `(${subLabel})` : null}
    </Text>
  </Stack>
);
};

export default EmployeeInfo;
