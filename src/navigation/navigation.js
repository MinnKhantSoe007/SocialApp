import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Splash from "../screen/splash";
import Login from "../screen/login";
import Create from "../screen/create";
import Home from "../screen/home";
import CreatePost from "../screen/createPost";

const Stack = createStackNavigator();

export default function NavigationStack() {
  
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Splash" component={Splash}/>
        <Stack.Screen name="Create account" component={Create}/>
        <Stack.Screen name="Create post" component={CreatePost}/>
        <Stack.Screen name="Home" component={Home} options={() => ({ headerLeft: () => null })}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}