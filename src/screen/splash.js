import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import AuthService from "../services/authService";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { getToken, addToken } from "../store/userSlice";

export default function Splash({ navigation }) {

  const dispatch = useDispatch()
  const token = useSelector(getToken);

  const logout = () => {
    AuthService.logout(token).then(res => {
      console.log(res.data);
      AsyncStorage.setItem("token", "");
    }).catch(err => console.log(err));
  }
  
  return (
    <SafeAreaView style={styles.container}>

      <Text>Hello</Text>
      <StatusBar style="auto" />
      
      <TouchableOpacity onPress={()=> navigation.navigate("Create account")}>
        <Text>Create</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=> navigation.navigate("Login")}>
        <Text>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={logout}>
        <Text>Logout</Text>
      </TouchableOpacity>

    </SafeAreaView>
  )
}