import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import { View, Text, ScrollView, TouchableOpacity } from "react-native"
import Checkbox from "expo-checkbox";

export default function Assignments() {
  const assignments: Assignment[] = [
    { title: "Add your own module to Linux Kernel", class: "Operating Systems", dueDate: "Oct 30, 2024" },
    { title: "Write your own blog and host it", class: "Web Development", dueDate: "Nov 5, 2024" },
    { title: "Pentesting report", class: "CyberSecurity", dueDate: "Nov 12, 2024" },
    { title: "Design a school information system UI", class: "Mobile Development", dueDate: "Dec 1, 2024" },
    { title: "Book Report", class: "English Literature", dueDate: "Nov 20, 2024" },
  ];

  return (
    <View className="flex-col w-full h-[65%] gap-y-4 px-6">
      <Text className="text-gray-100 font-bold text-2xl">Assignments</Text>
      <ScrollView className="w-full h-full flex-col" contentContainerStyle={{rowGap: 20}}>
        {assignments.map((assignment, index) => (
            <View className="w-full p-4 bg-[#607fa3] flex-col gap-y-1 rounded-xl" key={index}>
              <View className="w-full flex-row justify-between">
                <Text className="font-semibold text-lg text-gray-200">{assignment.title}</Text>
                <Checkbox className="w-5 h-5" style={{borderColor: "white", borderRadius: 10}}/>
              </View>
              <View className="w-full flex-row justify-between">
                <Text className="font-normal text-gray-300 text-base">{assignment.class}</Text>
                <Text className="font-normal text-gray-300 text-base">{assignment.dueDate}</Text>
              </View>
            </View>
        ))}
      </ScrollView>
      <View className="w-full flex-row justify-end items-center gap-x-2">
        <TouchableOpacity className="p-3 bg-[#93b7e1] rounded-[16px] flex-row items-center justify-center gap-x-[3px]">
          <Ionicons name="checkmark-sharp" size={20} color="white" />
          <Text className="text-gray-100 font-semibold text-base">Complete</Text>
        </TouchableOpacity>
        <TouchableOpacity className="p-3 bg-[#93b7e1] rounded-[16px] flex-row items-center justify-center gap-x-[3px]">
          <Entypo name="plus" size={20} color="white" />
          <Text className="text-gray-100 font-semibold text-base">Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}