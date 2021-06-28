import { API_ENDPOINT } from '../../constants';

 class FetchService {
  apiUrl: string;

  constructor() {
    this.apiUrl = `${API_ENDPOINT}`;
  }

  private static generateCreateBody<T extends object>(data: T) {
    const encodedUser = new URLSearchParams();

    Object.keys(data).forEach(el => {
      // @ts-ignore
      encodedUser.append(el, data[el]);
    });

    return encodedUser;
  }

  public async create<T extends object>(url: string, data: T): Promise<T & { id: string }> {
    const body = FetchService.generateCreateBody(data);

    return this.request(url, {
      method: 'POST',
      body,
    });
  }

  public async request(url = '', init?: RequestInit) {
    const requestUrl = `${this.apiUrl}${url}`;

    const response = await fetch(requestUrl, init);

    return response.json();
  }
}

export default new FetchService();
