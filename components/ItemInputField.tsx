import { View, Text, TextInput } from "react-native";

export default function ItemInputField({
  label,
  value,
  onChangeText,
  isNumeric = false,
}: ItemInputFieldProps) {
  return (
    <View className="w-[90%] flex-col gap-y-2 self-center">
      <Text className="font-semibold text-gray-100 text-base">{label}</Text>
      <TextInput
        className="text-base text-gray-100 bg-[#6d97c7] p-3 pl-4 w-full rounded-2xl"
        value={value}
        onChangeText={onChangeText}
        keyboardType={isNumeric ? "number-pad" : "default"}
      />
    </View>
  );
}
