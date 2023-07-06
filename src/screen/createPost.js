import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { TouchableOpacity, ScrollView, Alert } from "react-native";
import { Button, TextInput } from "react-native";
import { View, Text } from "react-native";
import { styles } from "./style";
import PostService from "../services/postService";
import { useDispatch, useSelector } from "react-redux";
import { addPosts, getToken } from "../store/postSlice";
import { store } from "../store";

export default function CreatePost({navigation}) {

  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const dispatch= useDispatch()

  const token = useSelector(getToken);

  const handleOnChangeTitle =text => {
    setTitle(text);
    console.log("Title", text)
  }

  const handleOnChangeBody =text => {
    setBody(text);
    console.log("Body", text)
  }

  const createPost = () => {
    console.log("cc", token)
    const payload = {
      title: title,
      body: body,
    }
    PostService.createPost(payload, token).then(res => {
      console.log("Post Data", res.data);
      dispatch(addPosts(res.data));
      navigation.navigate("Home");
    }).catch(err => {
      console.log("ERROR", err);
      Alert.alert('Error', 'you cannot leave the input field empty.', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    });
    
  }

  return (

    <ScrollView style={styles.create_container}>
      <StatusBar style="auto" />
      
      <View>
        <Text style={styles.create_para}>Add Title</Text>
      <TextInput style={styles.create_input} placeholder="Title" value={title} onChangeText={handleOnChangeTitle}/>
      </View>

      <View>
        <Text style={styles.create_para}>Add Body</Text>
        <TextInput style={styles.create_input} placeholder="Body" value={body} onChangeText={handleOnChangeBody}/>
      </View>
      
      <TouchableOpacity style={styles.create_button} onPress={createPost}><Text style={styles.create_button_text}>Create Post</Text></TouchableOpacity>
        
    </ScrollView>
  )
}