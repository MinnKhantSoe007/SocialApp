import axios from "axios";
import { BASE_URL } from "../constant/constant";
import { generateHttpOption } from "../helper/helper";

export default class AuthService {

  static createUser = (payload) => {
    return axios.post(BASE_URL + 'users', payload)
  }

  static login = (loginData) => {
    return axios.post(BASE_URL + 'auth/login', loginData)
  }

  static logout = (token) => {
    return axios.post(BASE_URL + 'auth/logout', {}, {
      headers: {
        ContentType: 'application/json',
        Authorization: 'Bearer' + token,
      }
    });
  }

  static checkToken = (token) => axios.get(BASE_URL + 'auth/me', generateHttpOption(token));

}