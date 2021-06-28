import React, { useMemo } from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from 'react-native-elements';

import screensData from './data';
import { SCREEN_NAMES } from '../constants';

const Stack = createStackNavigator();

const Screens = () => {
  const { theme } = useTheme();

  const screenOptions = useMemo(() => {
    return {
      headerStyle: {
        backgroundColor: theme.colors?.primary,
      },
      headerTintColor: theme.colors?.white,
    };
  }, [theme.colors?.primary, theme.colors?.white]);

  return (
    <Stack.Navigator initialRouteName={SCREEN_NAMES.loading} screenOptions={screenOptions}>
      {screensData.map(el => (
        <Stack.Screen key={el.name} {...el} />
      ))}
    </Stack.Navigator>
  );
};

export default Screens;
