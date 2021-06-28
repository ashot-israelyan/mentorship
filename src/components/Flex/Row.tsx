import React, { FC } from 'react';

import { View, StyleSheet } from 'react-native';

const Row: FC = ({ children }) => (
  <View style={styles.container}>
    {children}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

export default Row;
