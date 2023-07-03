import { configureStore, combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit"
import userReducer from "./userSlice"
import postReducer from "./postSlice"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { persistReducer } from "redux-persist"

const reducer = combineReducers({
  user: userReducer,
  posts: postReducer
})

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whiteList: 'posts'
}

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {},
      serializableCheck: false,
    }),
})