import Loading from './Loading';
import { IScreen } from './types';
import { SCREEN_NAMES } from '../constants';
import { Basic, Group, Job } from './Authorization';

const screensData: IScreen[] = [
  {
    name: SCREEN_NAMES.loading,
    component: Loading,
    options: {
      headerShown: false,
    },
  },
  {
    name: SCREEN_NAMES.authBasic,
    component: Basic,
    options: {
      title: 'Basic Details',
      animationEnabled: false,
    },
  },
  {
    name: SCREEN_NAMES.authGroup,
    component: Group,
    options: {
      title: 'Select Group Members',
    },
  },
  {
    name: SCREEN_NAMES.authJob,
    component: Job,
    options: {
      title: 'Job Details',
    },
  },
];

export default screensData;
