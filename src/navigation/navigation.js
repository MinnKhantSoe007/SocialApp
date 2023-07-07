import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Splash from "../screen/splash";
import Login from "../screen/login";
import Create from "../screen/create";
import Home from "../screen/home";
import CreatePost from "../screen/createPost";
import EditPost from "../screen/editPost";
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Stack = createStackNavigator();

export default function NavigationStack() {

  return (

    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name=" " component={Splash} />

        <Stack.Screen name="Login" component={Login}
          options={() => (
            { headerLeft: () => <AntDesign name="login" size={22} color="black" style={{ marginLeft: 15 }} /> })} />

        <Stack.Screen name="Create account" component={Create}
          options={() => (
            { headerRight: () => <MaterialIcons name="account-box" size={26} color="black" style={{ marginRight: 20 }} /> })} />

        <Stack.Screen name="Create post" component={CreatePost}
          options={() => (
            { headerRight: () => <Ionicons name="ios-create-outline" size={24} color="black" style={{ marginRight: 20 }} /> })} />

        <Stack.Screen name="Edit post" component={EditPost}
          options={() => (
            { headerRight: () => <AntDesign name="edit" size={24} color="black" style={{ marginRight: 20 }} /> })} />

        <Stack.Screen name="Home" component={Home}
          options={() => (
            { headerLeft: () => <FontAwesome name="home" size={24} color="black" style={{ marginLeft: 15 }} /> })} />
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}