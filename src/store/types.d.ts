import { EmployeeState } from './reducers/employees/types';

export interface IReduxState {
  readonly employees: EmployeeState;
}
