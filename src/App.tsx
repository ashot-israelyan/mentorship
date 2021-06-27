import React, { FC } from 'react';

import { Button, ThemeProvider } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';

import theme from './theme';

const App: FC = () => {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <Button title="hello" />
      </ThemeProvider>
    </NavigationContainer>

  );
};

export default App;
