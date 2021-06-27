import FetchService from './fetchService';
import { Employee } from '../../store/types';

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
}

export default new EmployeeService();
