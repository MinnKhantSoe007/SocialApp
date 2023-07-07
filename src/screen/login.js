import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { SafeAreaView } from "react-native";
import { TextInput, TouchableOpacity, Text, View, Alert } from "react-native";
import AuthService from "../services/authService";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "./style";
import { useDispatch } from "react-redux";
import { addToken } from "../store/userSlice";
import { store } from "../store";

export default function Login({ navigation }) {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();

  const handleOnChangeEmail = text => {
    setEmail(text);
    console.log("email", text)
  };

  const handleOnChangePassword = text => {
    setPassword(text);
    console.log("password", text)
  };

  const login = async () => {
    const loginData = {
      email: email,
      password: password
    }
    AuthService.login(loginData).then(res => {
      console.log(res.data);
      dispatch(addToken(res.data.access_token))
      AsyncStorage.setItem("token", JSON.stringify(res.data.access_token));
      navigation.navigate("Home");
    }).catch(err => {
      console.log(err);
      Alert.alert('Error', 'Check your email and password again.', [
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ]);
    });
  }

  return (

    <SafeAreaView style={styles.login_container}>

      <StatusBar style="auto" />

      <TextInput style={styles.create_input} placeholder="email" value={email} onChangeText={handleOnChangeEmail} />

      <TextInput style={styles.create_input} secureTextEntry={true} placeholder="password" value={password} onChangeText={handleOnChangePassword} />

      <TouchableOpacity style={styles.login_button} onPress={login}><Text style={styles.login_button_text}>Login</Text></TouchableOpacity>

      <TouchableOpacity style={styles.create_new_button} onPress={() => navigation.navigate("Create account")}><Text style={styles.create_new_button_text}>Create New Account</Text></TouchableOpacity>

    </SafeAreaView>


  )
}