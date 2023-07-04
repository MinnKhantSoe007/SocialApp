import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { TouchableOpacity, ScrollView } from "react-native";
import { Button, TextInput } from "react-native";
import { View, Text } from "react-native";
import { styles } from "./style";
import PostService from "../services/postService";
import { useSelector } from "react-redux";
import { getToken } from "../store/postSlice";
import { store } from "../store";

export default function CreatePost({navigation}) {

  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  const token = store.getState().user.token

  const handleOnChangeTitle =text => {
    setTitle(text);
    console.log("Title", text)
  }

  const handleOnChangeBody =text => {
    setBody(text);
    console.log("Body", text)
  }

  const createPost = () => {
    const payload = {
      title: title,
      body: body,
    }
    PostService.createPost(token, payload).then(res => {
      console.log(res.data);
    }).catch(err => console.log(err));
    navigation.navigate("Home");
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