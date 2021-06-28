import Loading from './Loading';
import { IScreen } from './types';
import { SCREEN_NAMES } from '../constants';
import { Basic, Group, Job } from './Authorization';
import UserProfile from './Profile/UserProfile';
import EditGroup from './Profile/EditGroup';

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
    statusBar: 'light-content',
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
  {
    name: SCREEN_NAMES.profilePage,
    component: UserProfile,
    options: {
      title: 'User Profile',
      animationEnabled: false,
    },
  },
  {
    name: SCREEN_NAMES.editGroup,
    component: EditGroup,
    options: {
      title: 'Edit Group',
    },
  },
];

export default screensData;
