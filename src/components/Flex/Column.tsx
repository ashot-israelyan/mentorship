import React, { FC } from 'react';

import { View, StyleSheet } from 'react-native';

const Column: FC = ({ children }) => (
  <View style={styles.container}>
    {children}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
});

export default Column;
