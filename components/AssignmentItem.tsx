import { View, Text, TouchableOpacity } from "react-native";
import Checkbox from "expo-checkbox";

export default function AssignmentItem({
  assignment,
  onPress,
  isPressable,
}: AssignmentItemProps) {
  return (
    <TouchableOpacity
      className={`w-full p-4 flex-col gap-y-1 rounded-xl ${
        assignment.completed ? "bg-[#516e90]" : "bg-[#607fa3]"
      }`}
      onPress={isPressable ? () => onPress(assignment.id) : undefined}
      activeOpacity={!isPressable ? 1 : undefined}
    >
      <View className="w-full flex-row justify-between">
        <Text
          className={`font-semibold text-lg text-gray-200 ${
            assignment.completed && "line-through"
          }`}
        >
          {assignment.title}
        </Text>
        <Checkbox
          className={`w-5 h-5 ${!isPressable && "hidden"}`}
          color={assignment.completed ? "#4f8cd2" : undefined}
          style={{ borderColor: "white", borderRadius: 10 }}
          value={assignment.completed}
          pointerEvents="none"
        />
      </View>
      <View className="w-full flex-row justify-between">
        <Text className="font-normal text-gray-300 text-base">
          {assignment.course}
        </Text>
        <Text className="font-normal text-gray-300 text-base">
          {assignment.dueDate}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
