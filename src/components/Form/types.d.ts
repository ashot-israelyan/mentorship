import { ViewStyle } from 'react-native';

export interface ILocationCmp {
  onChange: (text: string) => void;
  value: string;
  inputStyle?: ViewStyle;
}
