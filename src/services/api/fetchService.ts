import { API_ENDPOINT } from '../../constants';

class FetchService {
  apiUrl: string;

  constructor() {
    this.apiUrl = `${API_ENDPOINT}`;
  }

  private static generateRequestBody<T extends object>(data: T) {
    const encodedUser = new URLSearchParams();

    Object.keys(data).forEach(el => {
      // @ts-ignore
      encodedUser.append(el, data[el]);
    });

    return encodedUser;
  }

  private static generateRequestHeaders(): Headers {
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return headers;
  }

  private createUpdateData<T extends object>(url: string, data: T, method: string): Promise<T> {
    const body = FetchService.generateRequestBody(data);
    const headers = FetchService.generateRequestHeaders();

    return this.request(url, {
      method,
      body,
      headers,
    });
  }

  public async create<T extends object>(url: string, data: T): Promise<T> {
    return this.createUpdateData<T>(url, data, 'POST');
  }

  public async update<T extends object>(url: string, data: T): Promise<T> {
    return this.createUpdateData<T>(url, data, 'PUT');
  }

  public async request(url = '', init?: RequestInit) {
    const requestUrl = `${this.apiUrl}${url}`;

    const response = await fetch(requestUrl, init);

    return response.json();
  }
}

export default new FetchService();
