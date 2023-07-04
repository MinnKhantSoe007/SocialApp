import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: {},
  token: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (items, action) => {
      items.userInfo = action.payload
    },
    resetUser: (items) => {
      items.userInfo = {}
      items.token= null
    },
    addToken: (items, action) => {
      console.log("action", action);
      items.token = action.payload
    }
  }
})

const userReducer = userSlice.reducer
export const { addUser, resetUser, addToken } = userSlice.actions

export const getUserInfo = (state) => state.user.userInfo
export const getToken = (state) => state.user.token


export default userReducer;
