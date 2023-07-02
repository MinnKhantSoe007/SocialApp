import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import PostService from "../services/postService";

const initialState = {
  posts: [],
  status: 'loading',
  errorMessage: "",
  token: null
}

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPosts: (items, action) => {
      items.posts.push(action.payload)
    },

    addToken: (items, action) => {
      items.token = action.payload
    },

  },
  extraReducers: (builder) => {

    builder.addCase(fetchPosts.pending, (items, action) => {
      items.status = 'loading';
     
    }),
      
    builder.addCase(fetchPosts.fulfilled, (items, action) => {
      items.status = 'fulfilled';
      items.posts = action.payload;
      
    }),
      
    builder.addCase(fetchPosts.rejected, (items, action) => {
      items.status = 'rejected';
      items.errorMessage = action.payload;
      
    })
      
      
  }
})

const postReducer = postSlice.reducer
export const { addPosts } = postSlice.actions

export const getAllPosts = (state) => state.posts.posts

export const getPostStatus = (state) => state.posts.status

export const getToken = (state) => state.user.token;

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  try {
    const res = await PostService.getAllPosts(getToken)
    return res.data
  } catch {
    return "Something went wrong"
  }
})

export default postReducer;
