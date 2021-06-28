import React, { FC } from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { Text } from 'react-native';

import { Container } from '../../components';

const Basic: FC = () => {
  return (
    <Container>
      <Input placeholder="Your Name" />
      <Input placeholder="Your Surname" />
      <Input placeholder="Current Location" />
      <Input placeholder="Profile Picture" />
    </Container>
  );
};

export default Basic;
