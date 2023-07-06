import { BASE_URL } from "../constant/constant";
import { generateHttpOption } from "../helper/helper";
import axios from "axios";

export default class PostService {

  static getAllPosts = (token) => axios.get(BASE_URL + 'blog-posts/all', generateHttpOption(token));
  
  static createPost = (payload, token) => axios.post(BASE_URL + 'blog-posts', payload, generateHttpOption(token));

  static deletePost = (id, token) => {
    console.log("URL", BASE_URL + 'blog-posts/' + id);
    console.log("TOKEN", token);
    return axios.delete(BASE_URL + 'blog-posts/'+id, generateHttpOption(token)); 
  }

  static updatePost = (id, payload, token) => axios.put(BASE_URL + 'blog-posts/'+id, payload, generateHttpOption(token));
}