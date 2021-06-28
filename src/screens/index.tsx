import React, { useMemo } from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';
import { StackHeaderOptions } from '@react-navigation/stack/src/types';
import { useTheme } from 'native-base';

import screensData from './data';
import { SCREEN_NAMES } from '../constants';

const Stack = createStackNavigator();

const Screens = () => {
  const { colors } = useTheme();

  const screenOptions: StackHeaderOptions = useMemo(() => {
    return {
      headerStyle: {
        backgroundColor: colors.primary[500],
      },
      headerTintColor: colors.white,
    };
  }, [colors.primary, colors.white]);

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
