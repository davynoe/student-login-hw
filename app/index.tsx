import { Image, KeyboardAvoidingView } from "react-native";
import images from "@/constants/images";
import { SafeAreaView } from "react-native-safe-area-context";
import LoginInputField from "@/components/LoginInputField";
import { useState } from "react";
import RouteButton from "@/components/RouteButton";
import "../global.css";
import userData from "@/data/userData";

export default function Index() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
      <RouteButton
        label="Log in"
        route={`/${username}`}
        condition={userData.some(
          (user) => user.username === username && user.password === password
        )}
      />
    </SafeAreaView>
  );
}
