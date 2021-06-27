export interface Employee {
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  department: string;
  job_title: string;
  country: string;
  city: string;
  profile_picture: string;
  current_location: {
    lat: string;
    lot: string;
  }
}

export interface EmployeeState {
  items: Employee[]
}
