export interface Employee {
  id: string;
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
  items: Employee[];
  loading: boolean;
}

export interface AuthorizationState {
  firstName: string;
  lastName: string;
  currentLocation: string;
  profilePicture: string;
  department: string;
  jobTitle: string;
  group: string[];
}

export type BasicFormValues = Pick<AuthorizationState, 'firstName' | 'lastName' | 'profilePicture' | 'currentLocation'>;
export type JobFormValues = Pick<AuthorizationState, 'department' | 'jobTitle'>;

export interface IReduxState {
  readonly employees: EmployeeState;
  readonly authorization: AuthorizationState;
}
