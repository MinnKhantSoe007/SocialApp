import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { TouchableOpacity, ScrollView } from "react-native";
import { Button, TextInput } from "react-native";
import AuthService from "../services/authService";
import { View, Text } from "react-native";
import { styles } from "./style";

export default function Create({navigation}) {

  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirmation, setPasswordConfirmation] = useState();

  const handleOnChangeName =text => {
    setName(text);
    console.log("Name", text)
  }

  const handleOnChangePhone =text => {
    setPhone(text);
    console.log("Phone", text)
  }

  const handleOnChangeEmail =text => {
    setEmail(text);
    console.log("Email", text)
  }

  const handleOnChangePassword =text => {
    setPassword(text);
    console.log("Password", text)
  }

  const handleOnChangePasswordConfirmation =text => {
    setPasswordConfirmation(text);
    console.log("Confirm Password", text)
  }

  const createUser = () => {
    const payload = {
      name: name,
      phone: phone,
      email: email,
      password: password,
      password_confirmation: passwordConfirmation
    }
    AuthService.createUser(payload).then(res => {
      console.log(res.data);
    }).catch(err => console.log(err));
    navigation.navigate("Splash");
  }

  return (

    <ScrollView style={styles.create_container}>
      <StatusBar style="auto" />
      
      <View>
        <Text style={styles.create_para}>What's your name?</Text>
      <TextInput style={styles.create_input} placeholder="Name" value={name} onChangeText={handleOnChangeName}/>
      </View>

      <View>
        <Text style={styles.create_para}>What is your mobile number?</Text>
        <TextInput style={styles.create_input} placeholder="Phone number" value={phone} onChangeText={handleOnChangePhone}/>
      </View>

      <View>
        <Text style={styles.create_para}>Sign up with email</Text>
        <TextInput style={styles.create_input} placeholder="Email" value={email} onChangeText={handleOnChangeEmail}/>
      </View>

      <View>
        <Text style={styles.create_para}>Create a password</Text>
        <TextInput style={styles.create_input} secureTextEntry={true} placeholder="Password" value={password} onChangeText={handleOnChangePassword}/>
      </View>

      <View>
        <Text style={styles.create_para}>Confirm your password</Text>
        <TextInput style={styles.create_input} secureTextEntry={true} placeholder="Confirm Password" value={passwordConfirmation} onChangeText={handleOnChangePasswordConfirmation} />
      </View>
      
      <TouchableOpacity style={styles.create_button} onPress={createUser}><Text style={styles.create_button_text}>Create</Text></TouchableOpacity>
        
    </ScrollView>
  )
}