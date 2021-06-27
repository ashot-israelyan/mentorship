import React, { FC, useCallback } from 'react';

import { Button, ThemeProvider } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import theme from './theme';
import { fetchEmployees } from './store/actions';
import useMemoSelector from './hooks/useMemoSelector';
import { getEmployees } from './store/selectors';

const App: FC = () => {
  const employees = useMemoSelector(getEmployees);
  const dispatch = useDispatch();

  const onPress = useCallback(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={styles.container}>
        <Button title="hello" onPress={onPress} />
        {employees.map(empolyee => (
          <View key={empolyee.id} style={{ flexDirection: 'row' }}>
            <Text>{empolyee.first_name} {' '}</Text>
            <Text>{empolyee.last_name}</Text>
          </View>
        ))}
      </SafeAreaView>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
