import { View, Text, TextInput } from "react-native";

export default function LoginInputField({
  label, 
  value,
  onValueChange,
  isPassword = false,
} : LoginInputFieldProps) {
  return ( 
    <View className="w-[90%] flex flex-col gap-y-3">
      <Text className="font-semibold text-gray-100 text-xl w-full">{label}</Text>
      <TextInput 
        className="text-lg text-gray-100 bg-[#607fa3] p-3 pl-4 w-full rounded-2xl" 
        secureTextEntry={isPassword}
        value={value}
        onChangeText={onValueChange}
      />
    </View>
  );
}