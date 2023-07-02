import { BASE_URL } from "../constant/constant";
import { generateHttpOption } from "../helper/helper";
import axios from "axios";

export default class PostService {
  static getAllPosts = (token) => axios.get(BASE_URL + 'blog-posts/all',generateHttpOption(token));
  static createPost = (token, payload) => axios.post(BASE_URL + 'blog-posts',generateHttpOption(token),payload);
}