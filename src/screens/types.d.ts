import { ComponentType } from 'react';

import { StackNavigationOptions, StackNavigationProp } from '@react-navigation/stack';

export interface IScreen {
  name: string;
  component: ComponentType<any, undefined>;
  options?: StackNavigationOptions
}

export interface IScreenBase {
  navigation: StackNavigationProp<any, any>;
}
