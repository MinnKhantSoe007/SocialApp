import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts, getPostStatus } from "../store/postSlice";

export default function Home({navigation}) {

  const dispatch= useDispatch();
  const postList = useSelector(getAllPosts);
  const postStatus = useSelector(getPostStatus);

  useEffect(() => {
    if (postStatus == 'idle') {
      dispatch(fetchPosts())
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

  return (
    <>
    <StatusBar />
      <SafeAreaView>
        <Text>Hello User</Text>
        <TouchableOpacity onPress={()=> navigation.navigate("Create post")}>
          <Text>Create Post</Text>
        </TouchableOpacity>
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