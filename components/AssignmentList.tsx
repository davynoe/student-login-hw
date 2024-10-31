import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import AssignmentItem from "./AssignmentItem";
import { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function AssignmentList({
  assignments,
  onSelectAssignment,
  onDelete,
  onAdd,
}: AssignmentListProps) {
  const [assignmentEditMode, setAssignentEditMode] = useState(false);

  return (
    <View className="flex-col w-full h-[65%] gap-y-4 px-6">
      <Text className="text-gray-100 font-bold text-2xl">Assignments</Text>
      <ScrollView
        className="w-full h-full flex-col"
        contentContainerStyle={{ rowGap: 20 }}
      >
        {assignments.map((assignment, index) => (
          <AssignmentItem
            key={index}
            assignment={assignment}
            onPress={onSelectAssignment}
            isPressable={assignmentEditMode}
          />
        ))}
      </ScrollView>
      <View className="w-full flex-row justify-end items-center gap-x-2">
        <TouchableOpacity
          className="p-3 bg-[#93b7e1] rounded-[16px] flex-row items-center justify-center gap-x-[3px]"
          onPress={() => setAssignentEditMode(!assignmentEditMode)}
        >
          <Ionicons
            name={assignmentEditMode ? "checkmark-sharp" : "pencil"}
            size={20}
            color="white"
          />
          <Text className="text-gray-100 font-semibold text-base">
            {assignmentEditMode ? "Finish" : "Edit"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="p-3 bg-[#93b7e1] rounded-[16px] flex-row items-center justify-center gap-x-[3px]"
          onPress={() => (assignmentEditMode ? onDelete() : onAdd())}
        >
          <Ionicons
            name={assignmentEditMode ? "trash" : "add"}
            size={20}
            color="white"
          />
          <Text className="text-gray-100 font-semibold text-base">
            {assignmentEditMode ? "Delete" : "Add"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
