import FetchService from './fetchService';
import { Employee } from '../../store/reducers/employees/types';

class EmployeeService extends FetchService {
  constructor() {
    super('employees');
  }

  public async getAll(): Promise<Employee[]> {
    return this.request();
  }

  public async getById(id: string): Promise<Employee> {
    return this.request(`/${id}`);
  }

  // public post() {
  //   return fetch(`${this.apiUrl}`, { method: 'POST', body: null });
  // }
}

export default new EmployeeService();
