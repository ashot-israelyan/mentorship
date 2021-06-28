import Loading from './Loading';
import { IScreen } from './types';
import { SCREEN_NAMES } from '../constants';

const screensData: IScreen[] = [
  {
    name: SCREEN_NAMES.loading,
    component: Loading,
    options: {
      headerShown: false,
    },
  },
];

export default screensData;
