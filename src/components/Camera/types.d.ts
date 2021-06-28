import { TakePictureResponse } from 'react-native-camera';

export interface ICameraCmp {
  isOpen: boolean;
  onSnap: (response: TakePictureResponse) => void;
}
