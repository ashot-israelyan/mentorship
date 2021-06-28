import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import screensData from './data';
import { SCREEN_NAMES } from '../constants';

const Stack = createStackNavigator();

const Screens = () => {
  return (
    <Stack.Navigator initialRouteName={SCREEN_NAMES.loading}>
      {screensData.map(el => (
        <Stack.Screen key={el.name} {...el} />
      ))}
    </Stack.Navigator>
  );
};

export default Screens;
