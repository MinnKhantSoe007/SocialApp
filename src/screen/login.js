import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { SafeAreaView } from "react-native";
import { TextInput, TouchableOpacity, Text, View } from "react-native";
import AuthService from "../services/authService";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "./style";
import { useDispatch } from "react-redux";
import { addToken } from "../store/userSlice";

export default function Login({ navigation }) {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [token, setToken] = useState();
  const dispatch = useDispatch();

  const handleOnChangeEmail = text => {
    setEmail(text);
    console.log("email", text)
  };

  const handleOnChangePassword = text => {
    setPassword(text);
    console.log("password", text)
  };

  const login = async() => {
    const loginData = {
      email: email,
      password: password
    }
    AuthService.login(loginData).then(res => {
      console.log(res.data);
      dispatch(addToken(res.data.access_token))
      setToken(res.data.access_token);
    }).catch(err => console.log(err));
    
    navigation.navigate("Home")
  }

  return (

    <SafeAreaView style={styles.login_container}>

      <StatusBar style="auto" />
      
     
      <TextInput style={styles.create_input} placeholder="email" value={email} onChangeText={handleOnChangeEmail} />
     
      <TextInput style={styles.create_input} secureTextEntry={true} placeholder="password" value={password} onChangeText={handleOnChangePassword} />
     
   
      
      

      <TouchableOpacity style={styles.create_button} onPress={login}><Text style={styles.create_button_text}>Login</Text></TouchableOpacity>

    </SafeAreaView>
    
    
    )
}