import { API_ENDPOINT } from '../../constants';

export default abstract class FetchService {
  apiUrl: string;

  protected constructor(protected endpoint: string) {
    this.apiUrl = `${API_ENDPOINT}/${endpoint}`;
  }

  protected async request(url = this.apiUrl, init?: RequestInit) {
    const response = await fetch(url, init);

    return response.json();
  }
}
