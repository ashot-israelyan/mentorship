import { Employee } from '../store/types';

export interface IEmployeesList {
  employees: Employee[];
  setEmployees: (ids: string[]) => void;
}

export interface IEmployeesDraggableList extends IEmployeesList {
}

export interface IEmployeeItem {
  item: Employee;
  selected?: boolean;
  onPress?: (id: string) => void;
  onLongPress?: () => void;
}

export interface IEmployeeInfo {
  id: number;
  title: string;
  label: string;
  subLabel?: string;
}
