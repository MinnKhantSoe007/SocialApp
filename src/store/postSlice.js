import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import PostService from "../services/postService";

const initialState = {
  posts: [],
  status: 'idle',
  errorMessage: "",
  token: null,
}

export const postSlice = createSlice({

  name: 'posts',
  initialState,
  reducers: {

    addPosts: (items, action) => {
      items.posts.push(action.payload)
    },

    deletePosts: (items, id) => {
      items.posts = items.posts.filter(n => n.id !== id);
    },

    updatePosts: (items, id, action) => {
      const index = items.posts.findIndex(n => n.id === id);
      if (index !== -1) {
        items.posts[index] = action.payload;
      }
    },

    addToken: (items, action) => {
      items.token = action.payload
    },

  },
  extraReducers: (builder) => {
    
    builder
      
    .addCase(fetchPosts.pending, (items, action) => {
      items.status = 'loading';
     
    })
      
    .addCase(fetchPosts.fulfilled, (items, action) => {
      items.status = 'fulfilled';
      items.posts = action.payload;
      
    })
      
    .addCase(fetchPosts.rejected, (items, action) => {
      items.status = 'rejected';
      items.errorMessage = action.payload;
      
    })
      
      
  }
})

const postReducer = postSlice.reducer

export const { addPosts, deletePosts, updatePosts } = postSlice.actions

export const getAllPosts = (state) => state.posts.posts

export const getPostStatus = (state) => state.posts.status

export const getToken = (state) => state.user.token;

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
 
    const res = await PostService.getAllPosts(getToken)
    return res.data
 
})

export default postReducer;
