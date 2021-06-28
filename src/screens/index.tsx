import React, { useMemo } from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from 'react-native-elements';
import { StatusBar } from 'react-native';
import { StackHeaderOptions } from '@react-navigation/stack/src/types';

import screensData from './data';
import { SCREEN_NAMES } from '../constants';

const Stack = createStackNavigator();

const Screens = () => {
  const { theme } = useTheme();

  const screenOptions: StackHeaderOptions = useMemo(() => {
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
        <Stack.Screen key={el.name} options={el.options} name={el.name}>
          {props => {
            const Component = el.component;

            return (
              <>
                <StatusBar barStyle={el.statusBar || 'default'} />
                <Component  {...props} />
              </>
            );
          }}
        </Stack.Screen>
      ))}
    </Stack.Navigator>
  );
};

export default Screens;
