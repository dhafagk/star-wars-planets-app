import axios, { AxiosInstance } from 'axios';

export default class AdapterService {
  requestAPI: AxiosInstance;

  constructor() {
    this.requestAPI = axios.create({
      baseURL: 'https://swapi.dev/api'
    });
  }

  sendGetRequest(url: string, params = {}) {
    return this.requestAPI.get(url, { params });
  }

  sendPostRequest(url: string, body = {}, params = {}) {
    return this.requestAPI.post(url, body, { params });
  }

  sendPutRequest(url: string, body = {}, params = {}) {
    return this.requestAPI.put(url, body, { params });
  }

  sendDeleteRequest(url: string, body = {}) {
    return this.requestAPI.delete(url, { data: body });
  }
}
