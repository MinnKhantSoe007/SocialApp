import { configureStore, combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit"
import userReducer from "./userSlice"
import postReducer from "./postSlice"

const reducer = combineReducers({
  user: userReducer,
  posts: postReducer
})

export const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {},
      serializableCheck: false,
    }),
})