import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts, getPostStatus } from "../store/postSlice";
import { resetUser } from "../store/userSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ActivityIndicator } from "react-native";
import { fetchPosts } from "../store/postSlice";
import { store } from "../store";

export default function Home({navigation}) {

  const dispatch= useDispatch();
  const postList = useSelector(getAllPosts);
  const postStatus = useSelector(getPostStatus);
  const token = store.getState().user.token

  useEffect(() => {
    if (postStatus == 'idle') {
      dispatch(fetchPosts(token))
    }
  }, [postStatus]);

  

  const renderPostItem = ({item}) => {
    return (
      <TouchableOpacity onPress={() => { }} style={{ margin: 20, borderRadius: 8 }}>
        <View>
          <Text>{item.title}</Text>
          <Text>{item.body}</Text>
        </View>

      </TouchableOpacity>
    )
  }

  const handleLogout = () => {
    dispatch(resetUser());
    AsyncStorage.removeItem("token");
    navigation.navigate("Login");
  }

  return (
    <>
    <StatusBar />
      <SafeAreaView>
        <Text>Hello User</Text>
        <TouchableOpacity onPress={()=> navigation.navigate("Create post")}>
          <Text>Create Post</Text>
        </TouchableOpacity>
        { postStatus == 'loading' && <ActivityIndicator size='small' color='#000'/>} 
        <FlatList
          overScrollMode="never"
          data={postList}
          renderItem={renderPostItem}
          keyExtractor={(_, index)=> index}
        />
      </SafeAreaView>
      </>
  )
}