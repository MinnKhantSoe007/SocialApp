import axios from "./axiosConfig";

export class ApiService {
  static post = (url, data) => axios.post(url, data);

  static get = url => axios.get(url);
  
  static delete = url => axios.delete(url);

  static getUrl = url => axios.get(url, { baseURL: '' });
}