import { Text, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function StudentList() {
  return (
    <View className="flex-col w-full h-[65%] gap-y-4 px-6">
      <Text className="text-gray-100 font-bold text-2xl">Students</Text>
      <View className="w-full flex-row justify-end items-center gap-x-2">
        <TouchableOpacity className="p-3 bg-[#93b7e1] rounded-[16px] flex-row items-center justify-center gap-x-[3px]">
          <Ionicons name={"pencil"} size={20} color="white" />
          <Text className="text-gray-100 font-semibold text-base">
            {"Edit"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="p-3 bg-[#93b7e1] rounded-[16px] flex-row items-center justify-center gap-x-[3px]">
          <Ionicons name={"add"} size={20} color="white" />
          <Text className="text-gray-100 font-semibold text-base">{"Add"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
