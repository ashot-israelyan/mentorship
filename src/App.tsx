import React, { FC } from 'react';

import { ThemeProvider } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Screens from './screens';
import theme from './theme';

const App: FC = () => {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <SafeAreaProvider>
          <Screens />
        </SafeAreaProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
