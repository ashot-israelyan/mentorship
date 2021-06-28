import { ComponentType } from 'react';

import { StackNavigationOptions } from '@react-navigation/stack';

export interface IScreen {
  name: string;
  component: ComponentType<any, undefined>;
  options?: StackNavigationOptions
}
