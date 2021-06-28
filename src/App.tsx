import React, { FC } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { extendTheme, NativeBaseProvider } from 'native-base';

import Screens from './screens';
import theme from './theme';

const App: FC = () => {
  const extendedTheme = extendTheme({
    colors: {
      ...theme.colors,
    },
    spacing: theme.spacing,
  });

  return (
    <NavigationContainer>
      <NativeBaseProvider theme={extendedTheme}>
        <SafeAreaProvider>
          <Screens />
        </SafeAreaProvider>
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default App;
