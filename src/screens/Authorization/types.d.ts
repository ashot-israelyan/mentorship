interface FormData {
  id: number;
  placeholder: string;
}

export interface IBaseFormData extends FormData {
  name: 'firstName' | 'lastName'
}

export interface IJobFormData extends FormData {
  name: 'department' | 'jobTitle';
}
