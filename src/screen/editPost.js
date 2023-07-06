import { View, Text, TextInput, TouchableOpacity, Alert, SafeAreaView, Modal, Pressable } from "react-native";
import { styles } from "./style";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePosts, getAllPosts, getToken, updatePosts, addPosts } from "../store/postSlice";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PostService from "../services/postService";

export default function EditPost({navigation, route}) {

  const { item } = route.params;
  const token = useSelector(getToken);
  const postList = useSelector(getAllPosts);
  const [title, setTitle] = useState(item?.title);
  const [body, setBody] = useState(item?.body);
  const [modalVisible, setModalVisible] = useState(false);
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
    PostService.updatePost(item.id, payload, token).then(res => {
      dispatch(updatePosts(res.data));
      navigation.navigate("Home");
    }).catch(err => {
      console.log("ERROR", err);
      Alert.alert('Error', 'There is an error while editing the post', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    })
  };

  const deletePost = () => {
    console.log(item);
    PostService.deletePost(item.id, token).then(res => {
    dispatch(deletePosts(item.id));
    navigation.navigate("Home");
    }).catch(err => {
      console.log(err);
      Alert.alert('Error', 'There is an error while deleting the post', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    })
  };

  return (
    <SafeAreaView>

    
    <Modal
    animationType="slide"
    transparent={true}
    visible={modalVisible}
  >

    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Text style={styles.modalText}>Are You Sure ?</Text>
            <Text style={styles.modalText}>It is permanent and you cant recover this.</Text>
            <View style={styles.modal_button_container}> 
            <Pressable
          style={styles.modal_button}
          onPress={deletePost}>
          <Text style={styles.modal_button_deleteStyle}>DELETE</Text>
        </Pressable>

        <Pressable
          style={styles.modal_button}
          onPress={() => setModalVisible(!modalVisible)}>
          <Text style={styles.modal_button_cancelStyle}>CANCEL</Text>
        </Pressable>
            </View>
        
      </View>
    </View>

      </Modal>
    

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
          <Text>{item.body}</Text>
          </TextInput>
      </View>
      
      <TouchableOpacity style={styles.edit_button} onPress={editPost}><Text style={styles.create_button_text}>Edit Post</Text></TouchableOpacity>

      <TouchableOpacity style={styles.delete_button}onPress={() => setModalVisible(true)}><Text style={styles.delete_button_text}>Delete Post</Text></TouchableOpacity>
        
      </View>
      </SafeAreaView>
  )
}