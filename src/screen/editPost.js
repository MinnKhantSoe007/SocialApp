import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePosts, getAllPosts, getToken, updatePosts } from "../store/postSlice";
import PostService from "../services/postService";

export default function EditPost({navigation, route}) {

  const { item } = route.params;
  const token = useSelector(getToken);
  const postList = useSelector(getAllPosts);
  const [title, setTitle] = useState(item?.title);
  const [body, setBody] = useState(item?.body);
  const dispatch = useDispatch();

  const handleOnChangeTitle =text => {
    setTitle(text);
    console.log("Title", text)
  }

  const handleOnChangeBody =text => {
    setBody(text);
    console.log("Body", text)
  }

  const editPost = () => {
    const payload = {
      title: title,
      body: body,
    }
    PostService.updatePost(item.id, token).then(res => {
      console.log(res.data);
      dispatch(updatePosts(item.id, payload));
      navigation.navigate("Home");
    }).catch(err=> console.log("ERROR", err))
  };

  const deletePost = () => {
    PostService.deletePost(item.id, token).then(res => {
      console.log(res.data);
      dispatch(deletePosts(item.id));
      navigation.navigate("Home");
    }). catch(err=>console.log("Error", err))
  };

  return (
    <View style={styles.create_container}>
      <StatusBar style="auto" />
      
      <View>
        <Text style={styles.create_para}>Edit Title</Text>
        <TextInput style={styles.create_input} onChangeText={handleOnChangeTitle}>
          <Text>{ item.title}</Text>
          </TextInput>
      </View>

      <View>
        <Text style={styles.create_para}>Edit Body</Text>
        <TextInput style={styles.create_input} onChangeText={handleOnChangeBody}>
          <Text>{ item.body}</Text>
          </TextInput>
      </View>
      
      <TouchableOpacity style={styles.edit_button} onPress={editPost}><Text style={styles.create_button_text}>Edit Post</Text></TouchableOpacity>

      <TouchableOpacity style={styles.delete_button} onPress={deletePost}><Text style={styles.delete_button_text}>Delete Post</Text></TouchableOpacity>
        
    </View>
  )
}