import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./home";
import Login from "./login";
import RegisterFaces from "./registerfaces";
import Facerecognition from "./facerecognition";
import { useWindowDimensions } from "react-native";

const Stack = createNativeStackNavigator();

export default function App() {
  const { width } = useWindowDimensions();
  const isTablet = width >= 768 && width < 1024;
  const isLargeDevice = width >= 1024;
  const header = isLargeDevice ? true : isTablet ? true : false;
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: header }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="register" component={RegisterFaces} />
        <Stack.Screen name="Recognition" component={Facerecognition} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
