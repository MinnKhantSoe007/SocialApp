import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView, ActivityIndicator } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import AuthService from "../services/authService";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { getToken, addToken, addUser } from "../store/userSlice";

export default function Splash({ navigation }) {

  const dispatch = useDispatch()
  // const token = useSelector(getToken);

  useEffect(() => {
    AsyncStorage.getItem("token").then(res => {
      const token = JSON.parse(res);
      console.log("aa", token)
      token ? checkToken(token) : navigation.navigate("Login");
    })
 }, [])

    const checkToken = (token) => {
      console.log("Token", token)
      AuthService.checkToken(token).then(res => {
        dispatch(addToken(token));
        dispatch(addUser(res.data));
        console.log("ResData", res.data);
        navigation.navigate("Home");

      }).catch(e => {
        console.log("error", e);
        navigation.navigate("Login");
      }
      )

    }

    const logout = () => {
      AuthService.logout(token).then(res => {
        console.log(res.data);
        AsyncStorage.setItem("token", "");
      }).catch(err => console.log(err));
    }

    return (
      <SafeAreaView style={styles.container}>

        <ActivityIndicator size='large' color='#000'/>

      </SafeAreaView>
    )
  }