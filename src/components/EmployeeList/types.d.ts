import { Employee } from '../../store/types';

export interface IEmployeesList {
  employees: Employee[];
  setEmployees: (ids: string[]) => void;
}

export interface IEmployeeItem {
  item: Employee;
  selected?: boolean;
  onPress: (id: string) => void;
}

export interface IEmployeeInfo {
  id: number;
  title: string;
  label: string;
  subLabel?: string;
}
