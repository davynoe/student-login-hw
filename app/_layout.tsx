import { Stack } from "expo-router";
import { Platform } from "react-native";
import * as NavigationBar from 'expo-navigation-bar';

if(Platform.OS === "android") {
  NavigationBar.setPositionAsync("absolute");
  NavigationBar.setBackgroundColorAsync("#ffffff01");
}

export default function RootLayout() {
  return (
    <Stack screenOptions={{headerShown: false}} >
      <Stack.Screen name="index" />
      <Stack.Screen name="student" />
    </Stack>
  );
}
