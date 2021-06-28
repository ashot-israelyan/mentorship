import React from 'react';

import { ActivityIndicator } from 'react-native';

import { Center } from '../components';

const Loading = () => {
  return (
    <Center>
      <ActivityIndicator size="large" />
    </Center>
  );
};

export default Loading;
