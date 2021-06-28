import { ComponentType } from 'react';

import { StackNavigationOptions, StackNavigationProp } from '@react-navigation/stack';
import { StatusBarStyle } from 'react-native';

export interface IScreen {
  name: string;
  component: ComponentType<any, undefined>;
  options?: StackNavigationOptions
  statusBar?: StatusBarStyle
}

export interface IScreenBase {
  navigation: StackNavigationProp<any, any>;
}
