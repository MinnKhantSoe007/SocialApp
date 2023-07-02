import axios from "axios";
import { BASE_URL } from "../constant/constant";

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
    }
    )
  }
}