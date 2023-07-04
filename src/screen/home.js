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
import { styles } from "./style";
import AuthService from "../services/authService";

export default function Home({navigation}) {

  const dispatch= useDispatch();
  const postList = useSelector(getAllPosts);
  const postStatus = useSelector(getPostStatus);
  const token = store.getState().user.token;

  useEffect(() => {
    if (postStatus == 'idle') {
      dispatch(fetchPosts(token))
    }
  }, [postStatus]);

  const logout = () => {
    AuthService.logout(token).then(res => {
      console.log(res.data);
      dispatch(resetUser(res.data.access_token))
      AsyncStorage.setItem("token", "");
      navigation.navigate("Login");
    }).catch(err => console.log(err));
    
  }

  

  const renderPostItem = ({item}) => {
    return (
      <TouchableOpacity onPress={() => { }} style={styles.posts}>
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
      <SafeAreaView style={styles.home_container}>
        <View style={styles.welcome}>
          <Text style={styles.welcome_text}>Hello User </Text>

          <TouchableOpacity onPress={()=> navigation.navigate("Create post")}>
            <Text style={styles.create_post}>Create Post</Text>
          </TouchableOpacity>
         
        </View>
        
        
        { postStatus == 'loading' && <ActivityIndicator size='small' color='#000'/>} 
        <FlatList
          overScrollMode="never"
          data={postList}
          renderItem={renderPostItem}
          keyExtractor={(_, index)=> index}
        />

        <TouchableOpacity style={styles.logout} onPress={logout}><Text style={styles.logout_text}>Log Out</Text></TouchableOpacity>
      </SafeAreaView>
      </>
  )
}