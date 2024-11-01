import {
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  Text,
} from "react-native";
import images from "@/constants/images";
import { SafeAreaView } from "react-native-safe-area-context";
import LoginInputField from "@/components/LoginInputField";
import { useState } from "react";
import "@/global.css";
import userData from "@/data/userData";
import { router } from "expo-router";

export default function User() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    const user = userData.find((user) => user.username === username);
    if (user && user.password === password) {
      switch (user.mode) {
        case "student":
          router.push("/student");
          break;
        case "teacher":
          router.push("/teacher");
          break;
        case "secretary":
          break;
      }
    }
    return null;
  }

  return (
    <SafeAreaView className="h-full w-full px-10 bg-[#335276] flex-col items-center justify-center gap-y-16">
      <Image
        source={images.imuLogo}
        style={{ height: 80, resizeMode: "contain" }}
      />
      <KeyboardAvoidingView className="flex-col gap-y-8 w-full items-center">
        <LoginInputField
          label="Username"
          value={username}
          onValueChange={setUsername}
        />
        <LoginInputField
          label="Password"
          isPassword
          value={password}
          onValueChange={setPassword}
        />
      </KeyboardAvoidingView>
      <TouchableOpacity
        className="px-8 py-4 bg-[#4195c5] rounded-3xl"
        onPress={handleLogin}
      >
        <Text className="text-xl font-semibold text-white">Log in</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
