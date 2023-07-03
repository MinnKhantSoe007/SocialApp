import axios from "axios";
import { BASE_URL } from "../constant/constant";
import { Alert } from "react-native";
import { fetch as detectNetInfoState } from "@react-native-community/netinfo";

let store;

export default customAxios = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const injectStore = (_store) => {
  store = _store
}

customAxios.interceptors.request.use((config) => {
  const token = store.getState().user.token
  console.log("token", token);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  console.log("config", config);
  return config;
})

customAxios.interceptors.request.use(async (config) => {
  const controller = new AbortController();
  const isConnected = await isNetworkConnected();
  if (!isConnected) {
    console.log('no internet connection');
    Alert.alert("Network Error", "No Internet Connection", [{ text: 'OK', style: "cancel" }]);
    controller.abort();
  }

  return {
    ...config,
    signal: controller.signal
  }
});

const isNetworkConnected = async () => {
  return detectNetInfoState().then(state => state.isConnected && state.isInternetReachable != false)
}