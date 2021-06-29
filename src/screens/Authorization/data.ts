import { IBaseFormData, IJobFormData } from './types';

export const basicFormData: IBaseFormData[] = [{
  id: 1,
  name: 'firstName',
  placeholder: 'Your Name',
}, {
  id: 2,
  name: 'lastName',
  placeholder: 'Your Surname',
}];

export const jobFormData: IJobFormData[] = [{
  id: 1,
  name: 'department',
  placeholder: 'Department',
}, {
  id: 2,
  name: 'jobTitle',
  placeholder: 'Job Title',
}];
