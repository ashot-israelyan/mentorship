import { Employee } from '../store/types';
import { IEmployeeInfo } from '../components/types';

const generateEmployeeInfo = (empolyee: Employee): IEmployeeInfo[] => {
  return [
    {
      id: 1,
      title: 'Name:',
      label: `${empolyee.first_name} ${empolyee.last_name}`,
    },
    {
      id: 2,
      title: 'Gender:',
      label: empolyee.gender,
    },
    {
      id: 3,
      title: 'Email:',
      label: empolyee.email,
    },
    {
      id: 4,
      title: 'Job:',
      label: empolyee.department,
      subLabel: empolyee.job_title,
    },
    {
      id: 5,
      title: 'Location:',
      label: empolyee.country,
      subLabel: empolyee.city,
    },
  ];
};

export default generateEmployeeInfo;
